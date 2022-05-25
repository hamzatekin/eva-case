<script setup lang="ts">
// Just a helper component to render async data
import { CHART_LOADING_TEXT } from '@/misc/const';
const props = defineProps<{
    loadingText?: string;
    isLoading: boolean;
    error?: string;
}>();
</script>

<template>
    <div v-if="props.isLoading">
        <div class="flex-center" v-if="loadingText">{{ loadingText }}</div>
        <div class="flex-center" v-else>{{ CHART_LOADING_TEXT }}</div>
    </div>
    <div flex-center="flex-center" v-else-if="props.error">{{ error }}</div>
    <div flex-center="flex-center" v-else><slot /></div>
</template>

<style>
.flex-center {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
}
</style>
