<script setup lang="ts">
import { defaultOptions, type Options } from 'highcharts';
import { ref, toRef } from 'vue';
import HighChart from './HighChart.vue';

const props = defineProps<{
    chartData?: Options;
}>();

const chartData = toRef(props, 'chartData');

const chartOptions = ref<Options>({
    chart: {
        type: 'pie',
        plotShadow: false,
    },
    title: chartData?.value?.title,
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    caption: {
        useHTML: true,
        text: '<a href="https://www.highcharts.com/">Highchartsasdasdsadasd</a>',
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
