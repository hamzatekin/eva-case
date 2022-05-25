<script setup lang="ts">
import { getSalesAndExpenseByDate, getSalesFinance } from '@/auth/eva-api';
import { salesFinanceDto } from '@/misc/data';

import { onMounted, ref } from 'vue';
import ColumnChart from './charts/ColumnChart.vue';
import PieChart from './charts/PieChart.vue';
import AsyncRender from './AsyncRender.vue';
import {
    createColumnChartOptions,
    createPieChartOptions,
} from '@/utils/chart.utils';
import type { SeriesClickEventObject } from 'highcharts';

const salesFinanceChartData = ref();
const isSalesFinanceDataLoading = ref(false);
const salesFinanceDataErrorMessage = ref('');

const expensesAndRefundsChartData = ref();
const isExpensesAndRefundsLoading = ref(false);
const expensesAndRefunsErrorMessage = ref('');

onMounted(() => {
    fetchSalesFinanceChartData();
});

// Could be move to its own vuex module
const fetchSalesAndExpenseByData = async (date: {
    date: { month: number; year: number };
}) => {
    const payload = {
        date: date.date,
        marketplace: salesFinanceDto.marketplace,
        sellerId: salesFinanceDto.sellerId,
    };

    try {
        isExpensesAndRefundsLoading.value = true;

        const response = await getSalesAndExpenseByDate(payload);
        const data = createPieChartOptions(response);

        expensesAndRefundsChartData.value = data;
        isExpensesAndRefundsLoading.value = false;
    } catch (error: any) {
        expensesAndRefunsErrorMessage.value = error.message;
        isExpensesAndRefundsLoading.value = false;
    }
};

// Could be move to its own vuex module
const fetchSalesFinanceChartData = async () => {
    try {
        isSalesFinanceDataLoading.value = true;

        const response = await getSalesFinance(salesFinanceDto);
        const data = createColumnChartOptions(response);
        // Attaching onClick event here so that it can be used in this component. (probably thanks to closures)
        data.series.forEach((serie) => {
            serie.events = {};
            serie.events.click = onSeriesClicked;
        });

        salesFinanceChartData.value = data;

        isSalesFinanceDataLoading.value = false;
    } catch (error: any) {
        salesFinanceDataErrorMessage.value = error.message;
        isSalesFinanceDataLoading.value = false;
    }
};

const onSeriesClicked = ({ point: { category } }: SeriesClickEventObject) => {
    const date = category;
    // because one data that comes from api 2022-5/01-5/24 is not valid
    const dateList = date.split('-');

    const dto = {
        date: {
            month: parseInt(dateList[0], 10),
            year: parseInt(dateList[1], 10),
        },
    };

    fetchSalesAndExpenseByData(dto);
};
</script>

<template>
    <AsyncRender
        :isLoading="isSalesFinanceDataLoading"
        :error="salesFinanceDataErrorMessage"
    >
        <div class="chart">
            <ColumnChart :chartData="salesFinanceChartData" />
        </div>
    </AsyncRender>

    <AsyncRender
        class="mt-10"
        :isLoading="isExpensesAndRefundsLoading"
        :error="expensesAndRefunsErrorMessage"
    >
        <div class="chart">
            <PieChart :chartData="expensesAndRefundsChartData" />
        </div>
    </AsyncRender>
</template>
