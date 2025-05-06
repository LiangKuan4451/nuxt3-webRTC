<template>
    <!-- 主页英雄区域 -->
    <div class="container p-6 gap-4 min-h-screen sm:p-20">

        <!-- 个人信息区域 -->
        <div class="w-full">
            <p class="">您好！欢迎来到我的个人网站，这里展示了我的项目作品和个人信息。我是一名前端开发工程师，目前在转向全栈工程师。</p>
            <p class="py-6">这个网站还没设计好，目前只是作为我微信小程序的API接口。</p>

            <!-- 导航按钮区域 -->
            <div class="flex gap-4">
                <NuxtLink to="/projects" class="btn btn-primary">查看作品</NuxtLink>
                <NuxtLink to="/info" class="btn btn-primary">关于我</NuxtLink>
            </div>

            <!-- 联系方式区域 -->
            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-4">联系方式</h2>
                <div class="flex flex-wrap gap-2">
                    <button class="btn btn-primary" v-for="contact in contactInfo" :key="contact.name"
                        @click="handleContactClick(contact)">
                        <Icon :name="contact.icon" size="1.5rem" class="text-white" />
                        <span>{{ contact.name }}</span>
                    </button>
                </div>
            </div>
            <!-- 技术栈展示区域 -->
            <div class="mt-8 max-w-3xl ">
                <h2 class="text-2xl font-semibold mb-4">技术栈</h2>

                <div class="space-y-4">
                    <div v-for="tech in techStack" :key="tech.name" class="tech-item">
                        <div class="flex justify-between items-center mb-1">
                            <div class="flex items-center gap-2">
                                <Icon :name="tech.icon" size="1.5rem" class="text-primary" />
                                <span class="font-medium">{{ tech.name }}</span>
                            </div>
                            <div class="flex items-center">
                                <span class="text-sm mr-2">{{ getProficiencyLabel(tech.proficiency) }}</span>
                                <span class="text-sm">{{ tech.proficiency }}%</span>
                            </div>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                            <div class="h-2.5 rounded-full" :class="getProficiencyColorClass(tech.proficiency)"
                                :style="{ width: tech.proficiency + '%' }"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 弹出框 -->
        <dialog id="contactDialog" class="modal">
            <div class="modal-box">
                <h3 class="text-lg font-bold">提示</h3>
                <p class="py-4">已将联系方式复制到剪切板</p>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 导入技术栈store
import { useTechStackStore } from '~/stores/techStack'

// 使用技术栈store
const techStackStore = useTechStackStore()
const techStack = computed(() => techStackStore.techStack)
const getProficiencyLabel = techStackStore.getProficiencyLabel
const getProficiencyColorClass = techStackStore.getProficiencyColorClass

// 联系方式数据
const contactInfo = ref([
    {
        name: 'GitHub',
        icon: 'simple-icons:github',
        action: "window.open('https://github.com/yingyu4451', '_blank')"
    },
    {
        name: 'QQ/微信：445140823',
        icon: 'simple-icons:tencentqq',
        action: `copyContact('445140823')`
    }
])

// 处理联系方式点击
const handleContactClick = (contact) => {
    switch (true) {
        case contact.action.includes('window.open'):
            window.open('https://github.com/yingyu4451', '_blank');
            break;
        case contact.action.includes('copyContact'):
            copyContact('445140823');
            break;
        default:
            console.log('未知的联系方式操作');
            break;
    }
}

// 复制联系方式到剪贴板
const copyContact = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => {
            contactDialog.showModal()
            setTimeout(() => {
                contactDialog.close()
            }, 1500)
        })
        .catch(err => {
            console.error('复制失败:', err)
        })
}
</script>

<style scoped>
.tech-item {
    transition: all 0.3s ease;
}

.tech-item:hover {
    transform: translateY(-2px);
}
</style>
