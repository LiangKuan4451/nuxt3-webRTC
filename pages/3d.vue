<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-8 text-center">3D 模型展示</h1>
    <div class="model-container" ref="container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const container = ref(null)
let scene, camera, renderer, model, controls

onMounted(() => {
  initThree()
  loadModel()
  animate()
})

onBeforeUnmount(() => {
  if (renderer) {
    renderer.dispose()
  }
  if (controls) {
    controls.dispose()
  }
  window.removeEventListener('resize', onWindowResize)
})

function initThree() {
  // 创建场景
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    1000
  )
  camera.position.set(0, 0, 5)

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  renderer.shadowMap.enabled = true
  container.value.appendChild(renderer.domElement)

  // 添加光源
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
  scene.add(ambientLight)

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight1.position.set(1, 1, 1)
  directionalLight1.castShadow = true
  scene.add(directionalLight1)

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5)
  directionalLight2.position.set(-1, -1, -1)
  scene.add(directionalLight2)

  // 添加点光源
  const pointLight = new THREE.PointLight(0xffffff, 1, 10)
  pointLight.position.set(0, 2, 2)
  scene.add(pointLight)

  // 添加轨道控制器
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.screenSpacePanning = false
  controls.minDistance = 2
  controls.maxDistance = 10
  controls.maxPolarAngle = Math.PI / 2

  // 添加窗口大小变化监听
  window.addEventListener('resize', onWindowResize)
}

function loadModel() {
  const loader = new GLTFLoader()
  loader.load(
    '/models/custom_20dice.glb',
    (gltf) => {
      model = gltf.scene
      
      // 调整模型位置和大小
      model.position.set(0, 0, 0)
      model.scale.set(1, 1, 1)
      
      // 为模型添加阴影
      model.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
      
      scene.add(model)
      
      // 自动旋转模型
      animate()
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% 已加载')
    },
    (error) => {
      console.error('加载GLB模型出错:', error)
    }
  )
}

function animate() {
  requestAnimationFrame(animate)
  
  // 更新控制器
  if (controls) {
    controls.update()
  }
  
  // 缓慢旋转模型
  if (model) {
    model.rotation.y += 0.005
  }
  
  renderer.render(scene, camera)
}

function onWindowResize() {
  const width = container.value.clientWidth
  const height = container.value.clientHeight
  
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}
</script>

<style scoped>
.model-container {
  width: 100%;
  height: 70vh;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>