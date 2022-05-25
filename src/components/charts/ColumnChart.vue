<script setup lang="ts">
import { defaultOptions, type Options } from 'highcharts';
import { ref, toRef } from 'vue';

const props = defineProps<{
    // to lazy to type this
    chartData?: Record<string, any>;
}>();

const chartData = toRef(props, 'chartData');

const chartOptions = ref<Options>({
    chart: {
        zoomType: 'xy',
    },

    title: chartData?.value?.title,
    subtitle: chartData?.value?.subtitle,
    xAxis: chartData?.value?.xAxis,
    yAxis: chartData?.value?.yAxis,
    tooltip: {
        shared: true,
    },
    plotOptions: {
        column: {
            stacking: 'normal',
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
    <highcharts :options="chartOptions" ref="chart"></highcharts>
</template>
