<template>
  <div class="container mx-auto">
    <NavBar />
    <NuxtPage />
    <Loading v-if="showLoader" :progress="loadingProgress" @loaded="handleLoaded" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const loadingProgress = ref(0);
const showLoader = ref(true);

// 模拟加载过程
function simulateLoading() {
  const interval = setInterval(() => {
    loadingProgress.value += Math.random() * 10;
    if (loadingProgress.value >= 100) {
      loadingProgress.value = 100;
      clearInterval(interval);
    }
  }, 300);
}

onMounted(() => {
  simulateLoading();
});

const handleLoaded = () => {
  showLoader.value = false;
};
</script>