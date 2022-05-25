<script setup lang="ts">
import type { Options } from 'highcharts';
import { toRef } from 'vue';

const props = defineProps<{
    chartOptions?: Options;
}>();

const chartOptions = toRef(props, 'chartOptions');
</script>

<template>
    <highcharts class="chart" :options="chartOptions"></highcharts>
</template>

<style>
.chart {
    width: 100%;
    height: 400px;
}
</style>
