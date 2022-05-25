<script setup lang="ts">
import { getSalesAndExpenseByDate, getSalesFinance } from '@/auth/eva-api';
import { salesFinanceDto } from '@/misc/data';

import { onMounted, ref, watch } from 'vue';
import ColumnChart from '../components/charts/ColumnChart.vue';
import PieChart from '../components/charts/PieChart.vue';
import AsyncRender from '../components/AsyncRender/AsyncRender.vue';
import ExpensesTable from '../components/ExpensesTable/ExpensesTable.vue';
import {
    createColumnChartOptions,
    createPieChartOptions,
} from '@/utils/chart.utils';
import type { SeriesClickEventObject } from 'highcharts';
import { createDateObjectForExpense } from '@/utils/helpers';

// I know this component is huge unneccessarly can broken into components but i didnt have much time to do it
// didnt use global loading module for spinners because of the video didnt have that
// also these all can be move to vuex modules
const salesFinanceChartData = ref();
const isSalesFinanceDataLoading = ref(false);
const salesFinanceDataErrorMessage = ref('');

const expensesAndRefundsChartData = ref();
const isExpensesAndRefundsLoading = ref(false);
const expensesAndRefunsErrorMessage = ref('');

const expensesData = ref();
const dates = ref();
const selectedDate = ref();

onMounted(() => {
    fetchSalesFinanceChartData();
});
// Could be move to its own vuex module
const fetchSalesFinanceChartData = async () => {
    try {
        isSalesFinanceDataLoading.value = true;

        const response = await getSalesFinance(salesFinanceDto);
        const data = createColumnChartOptions(response);
        // Attaching onClick event here so that it can be used in this component. (probably thanks to closures)

        dates.value = response.item.map((it) => it.date);
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
        console.log('response', response);

        const data = createPieChartOptions(response);

        expensesData.value = response;
        expensesAndRefundsChartData.value = data;
        isExpensesAndRefundsLoading.value = false;
    } catch (error: any) {
        expensesAndRefunsErrorMessage.value = error.message;
        isExpensesAndRefundsLoading.value = false;
    }
};

// watching selected date weather user clicks on column chart series or manualy selecting a date.
watch(selectedDate, () => {
    if (!selectedDate.value) {
        return;
    }

    const dto = createDateObjectForExpense(selectedDate.value);
    fetchSalesAndExpenseByData(dto);
});

// series callback
const onSeriesClicked = ({
    point: { category: date },
}: SeriesClickEventObject) => {
    selectedDate.value = date;
};
</script>

<template>
    <!-- Sections can be abstracted into its own components -->
    <section class="row">
        <div class="col-md-12">
            <div class="card vue-card">
                <div class="card-content">
                    <div class="card-body">
                        <AsyncRender
                            :isLoading="isSalesFinanceDataLoading"
                            :error="salesFinanceDataErrorMessage"
                        >
                            <ColumnChart :chartData="salesFinanceChartData" />
                        </AsyncRender>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Sections can be abstracted into its own components -->
    <section class="row">
        <div class="col-md-12">
            <div class="card vue-card">
                <div class="card-header" style="justify-content: end">
                    <div class="card-title" style="text-align: right">
                        <!-- This select box be abstracted into its own component -->
                        <select v-model="selectedDate">
                            <option disabled value="">Please Select</option>
                            <option
                                :key="item"
                                v-for="item in dates"
                                :value="item"
                            >
                                {{ item }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="card-content">
                    <div class="card-body">
                        <AsyncRender
                            class="mt-10"
                            :isLoading="isExpensesAndRefundsLoading"
                            :error="expensesAndRefunsErrorMessage"
                        >
                            <div class="chart-container">
                                <PieChart
                                    :chartData="expensesAndRefundsChartData"
                                />
                                <ExpensesTable :expensesData="expensesData" />
                            </div>
                        </AsyncRender>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.chart-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.vue-card {
    min-height: 400px !important;
}
</style>
