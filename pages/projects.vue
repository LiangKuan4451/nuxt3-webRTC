<template>
  <!-- 页面容器 -->
  <div class="container min-h-screen p-8">
    <!-- 页面标题 -->
    <h1 class="text-3xl font-bold mb-8 text-center">我的项目作品</h1>

    <!-- 项目卡片网格布局 -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 使用v-for循环展示项目 -->
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="card bg-base-100 shadow-xl hover:shadow-2xl transition-all"
      >
        <!-- 项目图标区域 -->
        <figure class="relative">
          <div
            class="w-full h-56 bg-gradient-to-br from-primary/5 to-primary/20 flex items-center justify-center overflow-hidden"
          >
            <img
              :src="
                project.images && project.images.length > 0
                  ? project.images[0]
                  : project.image
              "
              :alt="project.title"
              class="max-h-44 max-w-[80%] object-contain transform transition-transform duration-500 hover:scale-110 cursor-pointer"
              @click="openImageModal(project)"
            />
            <!-- 添加点击放大提示 -->
            <div
              class="absolute bottom-2 right-2 tooltip tooltip-left"
              data-tip="点击图片放大查看"
            >
              <div
                class="hidden md:flex badge badge-primary p-2 opacity-80 hover:opacity-100 transition-opacity"
                @click="openImageModal(project)"
              >
                <Icon name="mdi:magnify-plus" size="1rem" />
              </div>
              <div
                class="md:hidden badge badge-primary p-2 opacity-80 hover:opacity-100 transition-opacity"
                @click="openImageModal(project)"
              >
                点击图片放大查看
              </div>
            </div>
            <!-- 查看更多图片按钮，仅当有多张图片时显示 -->
            <div
              v-if="project.images && project.images.length > 1"
              class="absolute top-2 right-2 badge badge-primary p-2 cursor-pointer"
              @click="openImageModal(project)"
            >
              <Icon name="mdi:image-multiple" size="1rem" class="mr-1" />
              {{ project.images.length }}张图片
            </div>
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
              <span
                v-for="tech in project.technologies"
                :key="tech"
                class="badge badge-primary p-3 flex items-center gap-1 hover:badge-secondary transition-colors duration-300"
              >
                <Icon
                  v-if="techStackStore.getIconByName(tech)"
                  :name="techStackStore.getIconByName(tech)"
                  size="1rem"
                />
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- 项目链接区域 -->
          <div class="card-actions justify-end mt-4">
            <a
              target="_blank"
              class="btn btn-primary btn-sm md:btn-md"
              v-for="(item, index) in project.link"
              :key="index"
              :href="item.url"
            >
              <Icon :name="item.icon" size="1.5rem" />
              {{ item.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- 图片查看模态框 -->
    <dialog
      v-for="(project, projectIndex) in projects"
      :key="'modal-' + projectIndex"
      :id="'image-modal-' + projectIndex"
      class="modal"
    >
      <div class="modal-box max-w-7xl p-0 bg-base-200 relative overflow-hidden">
        <!-- 轮播组件 -->
        <div class="carousel w-full h-full">
          <div
            v-if="project.images"
            v-for="(image, idx) in project.images"
            :key="idx"
            :class="[
              'carousel-item relative w-full',
              { hidden: projectImageIndexes[projectIndex] !== idx },
            ]"
          >
            <div
              class="flex items-center justify-center p-4 h-[60vh] bg-base-200/50 text-center mx-auto"
            >
              <img
                :src="image"
                :alt="project.title"
                class="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>

        <!-- 轮播控制按钮 -->
        <div
          class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
        >
          <button
            @click="prevImage(projectIndex)"
            class="btn btn-circle btn-primary"
          >
            <Icon name="mdi:chevron-left" size="1.5rem" />
          </button>
          <button
            @click="nextImage(projectIndex)"
            class="btn btn-circle btn-primary"
          >
            <Icon name="mdi:chevron-right" size="1.5rem" />
          </button>
        </div>

        <!-- 图片计数器 -->
        <div
          v-if="project.images"
          class="absolute bottom-4 left-0 right-0 text-center"
        >
          <div class="badge badge-primary gap-2 p-3">
            <span
              >{{ projectImageIndexes[projectIndex] + 1 }} /
              {{ project.images.length }}</span
            >
          </div>
        </div>

        <!-- 关闭按钮 -->
        <div class="absolute top-4 right-4">
          <button
            @click="closeModal(projectIndex)"
            class="btn btn-sm btn-circle btn-primary"
          >
            <Icon name="mdi:close" size="1.2rem" />
          </button>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button @click="closeModal(projectIndex)">关闭</button>
      </form>
    </dialog>
  </div>
</template>

<script setup lang="ts">
// 导入技术栈store和响应式API
import { useTechStackStore } from "~/stores/techStack";
import { ref } from "vue";

// 使用技术栈store
const techStackStore = useTechStackStore();

// 模态框状态
const projectImageIndexes = ref({});

// 打开图片模态框
const openImageModal = (project) => {
  // 找到项目索引
  const projectIndex = projects.findIndex((p) => p === project);
  if (projectIndex === -1) return;

  // 重置当前项目的图片索引
  projectImageIndexes.value[projectIndex] = 0;

  // 打开对应的模态框
  document.getElementById(`image-modal-${projectIndex}`).showModal();
};

// 关闭模态框
const closeModal = (projectIndex) => {
  document.getElementById(`image-modal-${projectIndex}`).close();
};

// 切换到下一张图片
const nextImage = (projectIndex) => {
  const project = projects[projectIndex];
  if (!project || !project.images) return;

  projectImageIndexes.value[projectIndex] =
    (projectImageIndexes.value[projectIndex] + 1) % project.images.length;
};

// 切换到上一张图片
const prevImage = (projectIndex) => {
  const project = projects[projectIndex];
  if (!project || !project.images) return;

  projectImageIndexes.value[projectIndex] =
    (projectImageIndexes.value[projectIndex] - 1 + project.images.length) %
    project.images.length;
};

// 项目数据定义
const projects = [
  // 项目一：AI食材营养分析助手
  {
    title: "AI食材营养分析助手",
    description:
      "一款基于AI技术的食材营养分析小程序，帮助用户了解食材的营养成分和健康信息。",
    icon: "mdi:food-apple",
    image: "/images/wx-deepseek-logo.jpg",
    images: [
      "/images/wx-deepseek-logo.jpg",
      "/images/wx-deepseek-1.jpg",
      "/images/wx-deepseek-2.jpg",
    ],
    technologies: [
      "Vue",
      "Nuxt",
      "UniApp",
      "TailwindCSS",
      "Supabase",
      "DeepSeek",
      "Pinia",
    ],
    link: [
      {
        type: "wechat",
        icon: "mdi:wechat",
        text: `微信"扫一扫"访问小程序`,
      },
    ],
  },
  // 项目二：俞行日记手机app
  {
    title: "俞行日记手机app",
    description: "一款医院旅行者应用，帮助用户记录和管理医院就诊信息。",
    icon: "mdi:hospital-building",
    image: "/images/HospitalTraveler-logo.png",
    images: [
      "/images/HospitalTraveler-logo.png",
      "/images/HospitalTraveler-1.jpg",
      "/images/HospitalTraveler-2.jpg",
      "/images/HospitalTraveler-3.jpg",
      "/images/HospitalTraveler-4.jpg",
      "/images/HospitalTraveler-5.jpg",
    ],
    technologies: ["UniApp", "TailwindCSS", "Pinia", "Android Studio"],
    link: [
      {
        type: "github",
        icon: "mdi:github",
        text: "GitHub",
        url: "https://github.com/LiangKuan4451/Hospital-Traveler/releases",
      },
      {
        type: "github",
        icon: "mdi:download",
        text: "下载APP",
        url: "https://gitee.com/yingyu4451/panyy.xyz/raw/master/public/app/1.1.0.apk",
      },
    ],
  },
  {
    title: "PDF论文内容索引工具",
    description:
      "跨平台、离线单机的PDF编辑工具，解决人工添加索引效率低、易出错的问题。实现全自动索引标目提取与电子化排版。",
    icon: "mdi:hospital-building",
    image: "/images/pdf-logo.png",
    images: ["/images/pdf-logo.png"],
    technologies: [
      "Vue",
      "Electron",
      "PDF.js",
      "Node.js",
      "TailwindCSS",
      "Element UI",
      "DocxTemplater",
    ],
    link: {},
  },
];

// 初始化每个项目的图片索引
projects.forEach((_, index) => {
  projectImageIndexes.value[index] = 0;
});
</script>

<style scoped>
/* 卡片动画效果 */
.card {
  transition: all 0.3s ease;
  border-radius: 1rem;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
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

/* 图片查看模态框样式 */
.modal-box {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* 轮播图片过渡效果 */
.carousel-item img {
  transition: transform 0.5s ease;
}

.carousel-item:hover img {
  transform: scale(1.05);
}

/* 轮播控制按钮悬停效果 */
.btn-circle {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.btn-circle:hover {
  opacity: 1;
  transform: scale(1.1);
}

/* 图片计数器样式 */
.badge.gap-2.p-3 {
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
