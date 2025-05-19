import { defineStore } from 'pinia'

// 使用setup风格的Pinia store
export const useTechStackStore = defineStore('techStack', () => {
  // 技术栈数据（带图标和熟练度百分比）
  const techStack = [
    { name: 'Vue', icon: 'simple-icons:vuedotjs', proficiency: 75 },
    { name: 'TailwindCSS', icon: 'simple-icons:tailwindcss', proficiency: 75 },
    { name: 'Element UI', icon: 'ep:element-plus', proficiency: 75 },
    { name: 'Nuxt', icon: 'simple-icons:nuxt', proficiency: 50 },
    { name: 'DaisyUI', icon: 'simple-icons:daisyui', proficiency: 50 },
    { name: 'UniApp', icon: 'ph:union-fill', proficiency: 50 },
    { name: 'Pinia', icon: 'mdi:fruit-pineapple', proficiency: 50 },
    { name: 'Supabase', icon: 'simple-icons:supabase', proficiency: 50 },
    { name: 'Electron', icon: 'simple-icons:electron', proficiency: 40 },
    { name: 'Three.js', icon: 'mdi:video-3d', proficiency: 20 },
    { name: 'Anime.js', icon: '', proficiency: 20 },
  ]

  // 根据技术名称获取图标
  const getIconByName = (name) => {
    const tech = techStack.find(item => item.name === name)
    return tech ? tech.icon : ''
  }

  // 根据熟练度获取标签
  const getProficiencyLabel = (proficiency) => {
    if (proficiency >= 90) return '精通'
    if (proficiency >= 70) return '熟练'
    if (proficiency >= 50) return '掌握'
    if (proficiency >= 20) return '学习中'
    return '入门'
  }

  // 根据熟练度获取颜色类
  const getProficiencyColorClass = (proficiency) => {
    if (proficiency >= 80) return 'bg-primary'
    if (proficiency >= 60) return 'bg-primary'
    if (proficiency >= 40) return 'bg-primary'
    if (proficiency >= 20) return 'bg-primary'
    return 'bg-error'
  }

  return {
    techStack,
    getIconByName,
    getProficiencyLabel,
    getProficiencyColorClass
  }
})