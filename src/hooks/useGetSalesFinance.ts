<script setup lang="ts">
import { getSalesFinance } from '@/auth/eva-api';
import { salesFinanceDto } from '@/misc/data';
import { onMounted, ref } from 'vue';

const chartData = ref();

onMounted(() => {
    startFetch();
});

const startFetch = async () => {
    const response = await getSalesFinance(salesFinanceDto);
    chartData.value = response;
};

return {
    chartData,
};
</script>
