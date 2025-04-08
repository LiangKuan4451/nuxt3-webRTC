<template>
  <div class="container mx-auto relative ">
      <NavBar />
      <NuxtPage />        
      <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const themeMode = localStorage.getItem('themeMode')

const loadingProgress = ref(0);

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
  if(!localStorage.getItem('themeMode')){
    localStorage.setItem('themeMode', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
  }else{
    document.documentElement.setAttribute('data-theme', themeMode)
  }
});


</script>