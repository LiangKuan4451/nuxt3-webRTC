<template>
    <!-- 页面容器 -->
    <div class="container min-h-screen p-8">
        <!-- 页面标题 -->
        <h1 class="text-3xl font-bold mb-8 text-center">我的项目作品</h1>
        
        <!-- 项目卡片网格布局 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- 使用v-for循环展示项目 -->
            <div v-for="(project, index) in projects" :key="index" 
                 class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all">
                <!-- 项目图标区域 -->
                <figure class="relative">
                    <div class="w-full h-56 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center overflow-hidden">
                        <img :src="project.image" :alt="project.title" class="max-h-44 max-w-[80%] object-contain transform transition-transform duration-500 hover:scale-110" />
                        <!-- 删除了右上角图标 -->
                    </div>
                </figure>
                
                <!-- 项目内容区域 -->
                <div class="card-body">
                    <!-- 项目标题和描述 -->
                    <h2 class="card-title text-xl font-bold">{{ project.title }}</h2>
                    <p class="text-base-content/80">{{ project.description }}</p>
                    
                    <!-- 技术栈区域 -->
                    <div class="mt-4">
                        <h3 class="font-semibold mb-2 flex items-center gap-2">
                            <Icon name="mdi:code-tags" size="1.2rem" class="text-primary" />
                            技术栈
                        </h3>
                        <div class="flex flex-wrap gap-2">
                            <span v-for="tech in project.technologies" :key="tech" 
                                  class="badge badge-primary p-3 flex items-center gap-1 hover:badge-secondary transition-colors duration-300">
                                <Icon v-if="techStackStore.getIconByName(tech)" :name="techStackStore.getIconByName(tech)" size="1rem" />
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                    
                    <!-- 项目链接区域 -->
                    <div class="card-actions justify-end mt-4">
                        <!-- 微信小程序链接 -->
                        <template v-if="project.link.type === 'wechat'">
                            <div class="tooltip" :data-tip="project.link.tooltip">
                                <button class="btn btn-primary btn-sm md:btn-md">
                                    <Icon :name="project.link.icon" size="1.5rem" />
                                    {{ project.link.text }}
                                </button>
                            </div>
                        </template>
                        <!-- GitHub链接 -->
                        <template v-else-if="project.link.type === 'github'">
                            <a :href="project.link.url" target="_blank" class="btn btn-primary btn-sm md:btn-md">
                                <Icon :name="project.link.icon" size="1.5rem" />
                                {{ project.link.text }}
                            </a>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 导入技术栈store
import { useTechStackStore } from '~/stores/techStack'

// 使用技术栈store
const techStackStore = useTechStackStore()

// 项目数据定义
const projects = [
    // 项目一：AI食材营养分析助手
    {
        title: 'AI食材营养分析助手',
        description: '一款基于AI技术的食材营养分析小程序，帮助用户了解食材的营养成分和健康信息。',
        icon: 'mdi:food-apple',
        image: '/images/uniapp-wx-logo.jpg',
        technologies: ['Vue', 'Nuxt', 'UniApp', 'TailwindCSS', 'Supabase', 'DeepSeek', 'Pinia'],
        link: {
            type: 'wechat',
            icon: 'mdi:wechat',
            text: '微信小程序',
            tooltip: '微信小程序搜索\'鹰宇食材助手\''
        }
    },
    // 项目二：俞行日记手机app
    {
        title: '俞行日记手机app',
        description: '一款医院旅行者应用，帮助用户记录和管理医院就诊信息。',
        icon: 'mdi:hospital-building',
        image: '/images/uniapp-android-logo.png',
        technologies: ['UniApp', 'TailwindCSS', 'Pinia', 'Android Studio'],
        link: {
            type: 'github',
            icon: 'mdi:github',
            text: 'GitHub',
            url: 'https://github.com/LiangKuan4451/Hospital-Traveler/releases'
        }
    }
]
</script>

<style scoped>
/* 卡片动画效果 */
.card {
    transition: all 0.3s ease;
    border-radius: 1rem;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* 图片容器样式 */
figure {
    overflow: hidden;
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
}

/* 技术栈标签悬停效果 */
.badge {
    transition: all 0.2s ease;
}

.badge:hover {
    transform: translateY(-2px);
}
</style>