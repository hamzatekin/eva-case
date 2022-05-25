<script setup lang="ts">
import { useRoute } from 'vue-router';
import PrivateLayout from './components/layouts/PrivateLayout.vue';
import PublicLayout from './components/layouts/PublicLayout.vue';

const route = useRoute();
</script>

<template>
    <div v-if="route.meta.layout === 'private'">
        <PrivateLayout />
    </div>

    <div v-if="route.meta.layout === 'public'">
        <PublicLayout />
    </div>
</template>
