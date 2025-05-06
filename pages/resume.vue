<template>
    <div class="container mx-auto px-4 py-8 min-h-screen">
        <!-- 个人信息头部 -->
        <div class="card bg-base-100 shadow-xl mb-8">
            <div class="card-body">
                <div class="flex flex-col md:flex-row justify-between items-start gap-4">
                    <div>
                        <h1 class="text-3xl font-bold text-primary">潘鹰宇</h1>
                        <div class="mt-2 flex flex-wrap gap-2">
                            <div class="badge badge-primary">应届毕业生</div>
                            <div class="badge badge-primary">本科</div>
                            <div class="badge badge-primary">2001年9月</div>
                        </div>
                        <div class="mt-4">
                            <p class="flex items-center gap-2 mb-1">
                                <Icon name="mdi:map-marker" class="text-primary" />
                                <span>所在地：上海</span>
                            </p>
                            <p class="flex items-center gap-2 mb-1">
                                <Icon name="mdi:home" class="text-primary" />
                                <span>籍贯：广西 百色</span>
                            </p>
                            <p class="flex items-center gap-2 mb-1">
                                <Icon name="mdi:email" class="text-primary" />
                                <span>445140823@qq.com</span>
                            </p>
                            <p class="flex items-center gap-2">
                                <Icon name="mdi:phone" class="text-primary" />
                                <span>+86 15676661154</span>
                            </p>
                        </div>
                    </div>
                    <div class="avatar placeholder">
                        <div class="bg-neutral text-neutral-content rounded-full w-24 md:w-32">
                            <span class="text-3xl">潘</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 教育经历 -->
        <div class="card bg-base-100 shadow-xl mb-8">
            <div class="card-body">
                <div class="flex items-center gap-2 mb-4">
                    <Icon name="mdi:school" size="1.5rem" class="text-primary" />
                    <h2 class="text-2xl font-bold">教育经历</h2>
                </div>
                <div class="divider my-0"></div>
                <div class="mt-4">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <h3 class="text-lg font-semibold">广西外国语学院</h3>
                        <span class="text-sm opacity-75">2022.9 - 2024.6</span>
                    </div>
                    <p>软件工程 本科</p>
                </div>
            </div>
        </div>

        <!-- 个人技能 -->
        <div class="card bg-base-100 shadow-xl mb-8">
            <div class="card-body">
                <div class="flex items-center gap-2 mb-4">
                    <Icon name="mdi:tools" size="1.5rem" class="text-primary" />
                    <h2 class="text-2xl font-bold">个人技能</h2>
                </div>
                <div class="divider my-0"></div>
                <ul class="mt-4 list-disc list-inside space-y-2">
                    <li>熟练使用 Vue、Element UI、MySql、UniApp、Electron 、Nuxt</li>
                    <li>有网页端、PC软件、微信小程序和android开发上线经验</li>
                    <li>有响应式设计和跨浏览器兼容性开发经验</li>
                    <li>熟练使用 Axios、TailwindCSS 等</li>
                    <li>熟悉前端构建工具 vite</li>
                    <li>熟悉版本控制工具 git</li>
                    <li>了解 node.js、jQuery、Java、MyBatis-Plus</li>
                </ul>
            </div>
        </div>

        <!-- 工作经历 -->
        <div class="card bg-base-100 shadow-xl mb-8">
            <div class="card-body">
                <div class="flex items-center gap-2 mb-4">
                    <Icon name="mdi:briefcase" size="1.5rem" class="text-primary" />
                    <h2 class="text-2xl font-bold">工作经历</h2>
                </div>
                <div class="divider my-0"></div>
                <div class="mt-4">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <h3 class="text-lg font-semibold">上海泰程信息科技有限公司</h3>
                        <span class="text-sm opacity-75">2024.7 - 2025.4</span>
                    </div>
                    <p class="mb-2 font-medium">全栈</p>
                    <div class="mb-2">
                        <p class="font-medium">工作内容：</p>
                        <ul class="list-disc list-inside pl-4">
                            <li>负责技术选型、核心功能开发</li>
                            <li>与后端开发人员沟通合作完成开发</li>
                            <li>与客户进行沟通，确定审核开发内容</li>
                        </ul>
                    </div>
                    <div>
                        <p class="font-medium">工作结果：</p>
                        <ul class="list-disc list-inside pl-4">
                            <li>成功交付2个项目，客户满意度高</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- 项目经历 -->
        <div class="card bg-base-100 shadow-xl mb-8">
            <div class="card-body">
                <div class="flex items-center gap-2 mb-4">
                    <Icon name="mdi:folder-open" size="1.5rem" class="text-primary" />
                    <h2 class="text-2xl font-bold">项目经历</h2>
                </div>
                <div class="divider my-0"></div>

                <!-- 项目1 -->
                <div class="mt-4 mb-6">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <h3 class="text-lg font-semibold">俞行日记手机APP</h3>
                        <span class="text-sm opacity-75">2025.3 - 至今</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <div class="badge badge-outline">个人项目</div>
                        <div class="badge badge-outline">全栈</div>
                    </div>
                    <a href="https://github.com/LiangKuan4451/Hospital-Traveler/releases" target="_blank" class="link link-primary flex items-center gap-1 mb-2">
                        <Icon name="mdi:github" />
                        <span>项目地址</span>
                    </a>
                    <p class="mb-2"><span class="font-medium">技术栈：</span>TailwindCSS + UniApp + Android Studio + Pinia</p>
                    <div class="mb-2">
                        <p class="font-medium">主要功能:</p>
                        <ol class="list-decimal list-inside pl-4">
                            <li class="mb-1">
                                <span class="font-medium">就医记录管理:</span>
                                <p class="pl-6">记录就医时间、医院、科室、费用等信息,支持添加、编辑、删除就医记记录。</p>
                            </li>
                            <li class="mb-1">
                                <span class="font-medium">数据统计与分析:</span>
                                <p class="pl-6">年度/月度就医次数统计,就医费用累计计算,就医记录可视化展示</p>
                            </li>
                            <li class="mb-1">
                                <span class="font-medium">医院与科室管理:</span>
                                <p class="pl-6">自定义医院与科室信息,快速选择常用医院与科室</p>
                            </li>
                            <li class="mb-1">
                                <span class="font-medium">数据导入导出:</span>
                                <p class="pl-6">支持数据的本地备份与恢复,数据加密传输，保障用户隐私,跨设备数据迁移</p>
                            </li>
                        </ol>
                    </div>
                </div>

                <!-- 项目2 -->
                <div class="mb-6">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <h3 class="text-lg font-semibold">AI食材营养分析助手</h3>
                        <span class="text-sm opacity-75">2025.3 - 至今</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <div class="badge badge-outline">个人项目</div>
                        <div class="badge badge-outline">前端开发工程师</div>
                    </div>
                    <p class="mb-2">微信搜索小程序"鹰宇食材分析"</p>
                    <p class="mb-2"><span class="font-medium">技术栈：</span>Vue 3 + Nuxt3 + UniApp + TailwindCSS + Supabase + DeepSeek + Pinia</p>
                    <div class="mb-2">
                        <p class="font-medium">主要功能：</p>
                        <ol class="list-decimal list-inside pl-4">
                            <li>用户账户系统：实现用户注册、登录和个人信息管理功能，支持数据云端同步。</li>
                            <li>数据云端同步：通过 Nuxt Server API 与 Supabase 数据库交互，实现用户数据云端存储与同步。</li>
                            <li>聊天记录存储：将用户查询历史和 AI 分析结果保存在本地和云端，方便用户随时查看历史记录。</li>
                            <li>食材营养分析：用户输入食材名称，系统通过 DeepSeek AI 模型分析并返回详细的营养成分数据，包括热量、蛋白质、脂肪、碳水化合物、膳食纤维等指标。</li>
                            <li>升糖指数评估：为每种食材提供 GI 值（升糖指数）分析，并根据数值高低给出"低"、"中"、"高"的直观评级，帮助用户了解食材对血糖的影响。</li>
                            <li>健康饮食建议：基于分析结果，提供个性化的食用建议，帮助用户合理安排饮食结构。</li>
                            <li>跨平台兼容：基于 uni-app 框架开发，支持一次开发，多端部署，包括微信小程序、H5 网页等平台。</li>
                        </ol>
                    </div>
                </div>

                <!-- 项目3 -->
                <div class="mb-6">
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <h3 class="text-lg font-semibold">学位论文内容索引工具</h3>
                        <span class="text-sm opacity-75">2025.1 - 2025.4</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <div class="badge badge-outline">上海泰程信息科技有限公司</div>
                        <div class="badge badge-outline">前端</div>
                    </div>
                    <p class="mb-2"><span class="font-medium">技术栈：</span>Vue3、Electron、PDF.js、docxtemplater、Node.js、Element Plus、TailwindCSS</p>
                    <div class="mb-2">
                        <p class="font-medium">项目简介：</p>
                        <p class="pl-4">为军队开发跨平台、离线单机的PDF编辑工具，解决人工添加索引效率低、易出错的问题。实现全自动索引标目提取与电子化排版。</p>
                    </div>
                    <div class="mb-2">
                        <p class="font-medium">工作内容：</p>
                        <ol class="list-decimal list-inside pl-4">
                            <li>主导技术选型与架构设计、核心功能开发、测试与部署。</li>
                            <li>通过敏捷开发与客户同步需求，迭代交付8个版本。</li>
                            <li>使用PDF.js解析论文内容，通过DOM坐标映射实现标目高亮与点击定位。</li>
                            <li>基于docxtemplater开发DOCX模板引擎，生成符合国标标准的索引文档。</li>
                        </ol>
                    </div>
                    <div>
                        <p class="font-medium">工作结果：</p>
                        <ol class="list-decimal list-inside pl-4">
                            <li>交付周期压缩30%，提前1个月通过验收测试。</li>
                            <li>索引生成准确率98.7%，人工校核工作量减少90%。</li>
                        </ol>
                    </div>
                </div>

                <!-- 项目4 -->
                <div>
                    <div class="flex flex-col md:flex-row justify-between mb-2">
                        <h3 class="text-lg font-semibold">onlyoffice报表系统</h3>
                        <span class="text-sm opacity-75">2024.10 - 2025.4</span>
                    </div>
                    <div class="flex flex-wrap gap-2 mb-2">
                        <div class="badge badge-outline">上海泰程信息科技有限公司</div>
                        <div class="badge badge-outline">前端</div>
                    </div>
                    <p class="mb-2"><span class="font-medium">技术栈：</span>Vue2、Element UI、codeMirror、onlyoffice</p>
                    <div class="mb-2">
                        <p class="font-medium">工作内容：</p>
                        <ol class="list-decimal list-inside pl-4">
                            <li>负责项目代码重构，从react迁移至vue</li>
                            <li>负责主要核心功能开发，并于后端沟通确定数据格式。</li>
                            <li>基于onlyoffice自定义标签功能实现模板批量导出功能。</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// 可以在这里添加任何需要的脚本逻辑
</script>

<style scoped>
/* 可以在这里添加任何需要的样式 */
</style>