<script setup lang="ts">
import type { Options } from 'highcharts';

const props = defineProps<{
    // to lazy to type this
    chartOptions?: Options;
}>();
</script>

<template>
    <highcharts class="chart" :options="props.chartOptions"></highcharts>
</template>

<style>
.chart {
    width: 100%;
    height: 400px;
}
</style>
