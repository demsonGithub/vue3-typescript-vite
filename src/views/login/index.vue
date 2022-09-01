<template>
  <div>login</div>
  <div><button @click="gotoHome">点我去home页</button></div>
  <div>
    <el-button type="primary" @click="gotoHome()"
      >测试element-plus按需导入</el-button
    >
  </div>
  <div>
    <svg-icon icon="info"></svg-icon>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const gotoHome = () => {
  router.push({ path: '/home' })
}
</script>
