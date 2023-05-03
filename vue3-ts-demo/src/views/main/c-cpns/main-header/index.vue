<template>
  <div class="main-header">
    <div class="menu-icon" @click="handleMenuIconClick">
      <el-icon size="28px">
        <component :is="isFold ? 'Expand' : 'Fold'" />
      </el-icon>
    </div>
    <div class="content">
      <div class="breadcrumb">面包屑</div>
      <headerInfo />
    </div>
  </div>
</template>

<script setup lang="ts">
import headerInfo from './c-cpns/header-info.vue'
defineProps({
  isFold: {
    type: Boolean,
    default: false
  }
})
// 0.内部自定义事件
const emit = defineEmits(['foldChange'])

// 1.记录状态
function handleMenuIconClick() {
  // 2.将事件和状态传递给父组件
  emit('foldChange')
}
</script>

<style lang="less" scoped>
.main-header {
  display: flex;
  align-items: center;
  flex: 1;
  height: 100%;

  .menu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 18px;
  }
}
</style>
