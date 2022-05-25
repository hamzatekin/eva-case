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
        <div v-if="loadingText">{{ loadingText }}</div>
        <div v-else>{{ CHART_LOADING_TEXT }}</div>
    </div>
    <div v-else-if="props.error">{{ error }}</div>
    <div v-else><slot /></div>
</template>
