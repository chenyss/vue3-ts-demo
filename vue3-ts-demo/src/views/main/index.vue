<template>
  <div class="main">
    <el-button type="primary" @click="handleExitBtnClick" class="login-btn">退出登录</el-button>
    <el-container class="main-content">
      <el-aside :width="isFold ? '60px' : '210px'">
        <MainMenu :isFold="isFold" />
      </el-aside>
      <el-container>
        <el-header height="50px">
          <MainHeader :isFold="isFold" @foldChange="onFoldChange" />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { localCache } from '@/utils/cache'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MainHeader from './c-cpns/main-header/index.vue'
import MainMenu from './c-cpns/main-menu/index.vue'
const route = useRouter()
let isFold = ref(false)
function handleExitBtnClick() {
  route.push('/login')
  localCache.removeCache('LOGIN_TOKEN')
}
function onFoldChange() {
  isFold.value = !isFold.value
  console.log(1)
}
</script>

<style lang="less" scoped>
.main {
  height: 100%;
}

.main-content {
  height: 100%;

  .el-aside {
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 200px;
    text-align: left;
    cursor: pointer;
    background-color: #001529;
    scrollbar-width: none; /* firefox */
    -ms-overflow-style: none; /* IE 10+ */

    transition: width 0.3s ease;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
