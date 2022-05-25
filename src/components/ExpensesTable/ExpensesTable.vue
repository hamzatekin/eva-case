<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { toRef } from 'vue';

const props = defineProps<{
    // idk why ts doesn't like this
    // eslint-disable-next-line no-undef
    expensesData?: SalesAndExpenseByDateResponseData;
}>();

const expensesData = toRef(props, 'expensesData');

const totalExpenses = computed(() => {
    return expensesData?.value?.item?.reduce((acc: any, curr: any) => {
        return acc + curr.amount;
    }, 0);
});
</script>

<template>
    <table v-if="expensesData" class="table">
        <thead>
            <tr>
                <th>Total Expenses</th>
                <th>{{ totalExpenses }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(it, i) in expensesData?.item" :key="i">
                <td>{{ it.type }}</td>
                <td>{{ it.amount }}</td>
            </tr>
        </tbody>
    </table>
</template>
