<template>
  <div class="main">
    <el-button type="primary" @click="handleExitBtnClick" class="login-btn">退出登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { useRouter } from 'vue-router'
const route = useRouter()
function handleExitBtnClick() {
  route.push('/login')
  localCache.removeCache('LOGIN_TOKEN')
}
</script>

<style lang="less" scoped></style>
