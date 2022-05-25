<script setup lang="ts">
import { defaultOptions, type Options } from 'highcharts';
import { ref, toRef } from 'vue';
import HighChart from './HighChart.vue';

const props = defineProps<{
    // to lazy to type this
    chartData?: Record<string, any>;
}>();

const chartData = toRef(props, 'chartData');

console.log('chartData', chartData);

const chartOptions = ref<Options>({
    chart: {
        type: 'pie',
        plotShadow: false,
    },
    title: chartData?.value?.title,
    tooltip: {
        pointFormat: '{series.name}: <b>{point.amount:.1f}%</b>',
    },
    plotOptions: {
        pie: {
            // allowPointSelect: true,
            // cursor: 'pointer',
            // dataLabels: {
            //     enabled: true,
            //     format: '<b>{point.name}</b>: {point.amount:.1f} %',
            // },
        },
    },
    legend: {
        backgroundColor:
            defaultOptions?.legend?.backgroundColor || 'rgba(255,255,255,0.25)',
    },
    series: chartData?.value?.series,
});
</script>

<template>
    <HighChart :options="chartOptions" />
</template>
