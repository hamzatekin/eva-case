<script setup lang="ts">
import LoadingSpinner from '../Spinner/LoadingSpinner.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const isLoading = computed(() => store.getters['loading/getIsLoading']);
</script>

<template>
    <LoadingSpinner v-if="isLoading" />
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="header-navbar-shadow"></div>
        <div class="content-wrapper">
            <div class="content-header row"></div>
            <div class="content-body">
                <router-view />
            </div>
        </div>
    </div>
</template>
