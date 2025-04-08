<template>
  <div ref="container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DragControls } from 'three/addons/controls/DragControls.js'

const container = ref(null)
let scene, camera, renderer, model





onMounted(() => {
  initThree()
  loadModel()
  animate()
  initDragControls()
})

onBeforeUnmount(() => {
  if (renderer) {
    renderer.dispose()
  }
})

function initThree() {
  // 创建场景
  scene = new THREE.Scene()
  // scene.background = new THREE.Color(0x111111) // 深色背景更能体现玻璃效果

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
    alpha: true // 允许透明
  })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  // 添加光源 - 确保骰子明亮
  const ambientLight = new THREE.AmbientLight(0xffffff, 1.0) // 强环境光
  scene.add(ambientLight)

  const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1.0)
  directionalLight1.position.set(1, 1, 1)
  scene.add(directionalLight1)

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8)
  directionalLight2.position.set(-1, -1, -1)
  scene.add(directionalLight2)

  // 可选：添加点光源增强效果
  const pointLight = new THREE.PointLight(0xffffff, 1.5, 10)
  pointLight.position.set(0, 2, 2)
  scene.add(pointLight)

}

function initDragControls(){
  if(!model || model.children.length ===0) return

  const objects =[]
  model.traverse((child)=>{
    if(child.isMesh){
      objects.push(child)
    }
  })
  const dragControls = new DragControls(objects,camera,renderer.domElement)
  dragControls.addEventListener('drag', function (event) {
    console.log(event);
  })
  // dragControls.addEventListener('dragend', function (event) {
  //   event.object.material.emissive.set(0xaaaaaa)
  // })
}

function loadModel() {
  const loader = new GLTFLoader()
  loader.load(
    '/models/custom_20dice.glb', // 替换为你的模型路径
    (gltf) => {
      model = gltf.scene
      scene.add(model)
      
      // 关键修改：模型加载完成后初始化 DragControls
      initDragControls()
    },
    undefined,
    (error) => {
      console.error('加载GLB模型出错:', error)
    }
  )
}

function animate() {
  requestAnimationFrame(animate)
  renderer.render(scene, camera) // 只渲染，不旋转
}

function onWindowResize() {
  const width = container.value.clientWidth
  const height = container.value.clientHeight

  // 设置为实际显示尺寸的80%提升性能
  renderer.setSize(width * 0.8, height * 0.8, false)
  camera.aspect = (width * 0.8) / (height * 0.8)
  camera.updateProjectionMatrix()
}

onMounted(() => {
  window.addEventListener('resize', onWindowResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onWindowResize)
})
</script>

<style scoped>
div {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -1;
  border: none;
}
</style>