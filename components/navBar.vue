<template>
  <div class="navbar bg-base-100 rounded-b-2xl shadow-2xs glass">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
          <li v-for="(navbarItem, index) in navbarItems" :key="index"><NuxtLink :to="navbarItem.link">{{ navbarItem.name }}</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li v-for="(navbarItem, index) in navbarItems" :key="index" :class="{ active : activeIndex === index }" @click="activeIndex = index">
          <NuxtLink :to="navbarItem.link">{{ navbarItem.name }}</NuxtLink>
          </li>
      </ul>
    </div>
    <div class="navbar-end">
      <button class="themeMode btn btn-link" :class="themeIcon.class" @click="changeThemeMode"><Icon :name="themeIcon.contant" size="2rem" mode="svg"/></button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {gsap} from 'gsap'
const navbarItems = ref([
  { name: '主页', link: '/' },
  { name: '作品', link: 'projects' },
  { name: '关于我', link: 'info' },
])

const themeIconList = ref([{
  contant:'mdi:white-balance-sunny',
  name:'light',
  class:'text-orange-400'
},{
  contant:'mdi:moon-waning-crescent',
  name:'dark',
  class:'text-yellow-200'
}])

const themeIcon = ref(themeIconList.value[0])

const activeIndex = ref()
const changeThemeMode = function(){
  const themeMode = localStorage.getItem('themeMode')
  if (themeMode === 'dark') {
    themeIcon.value = themeIconList.value[0]
    document.documentElement.setAttribute('data-theme', themeIcon.value.name)
    localStorage.setItem('themeMode', themeIcon.value.name)
  } else {
    themeIcon.value = themeIconList.value[1]
    document.documentElement.setAttribute('data-theme', themeIcon.value.name)
    localStorage.setItem('themeMode', themeIcon.value.name)
  }
}

</script>

<style scoped>
.navbar {
  @apply hover:opacity-75;
}

</style>