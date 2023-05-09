<template>
  <div class="user">
    <userSearch @queryClick="handleQueryClick" @resetClick="handleResetClick" />
    <UserContent ref="contentRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import UserContent from './c-cpns/user-content.vue'
import userSearch from './c-cpns/user-search.vue'

const contentRef = ref()
function handleQueryClick(formData: any) {
  contentRef.value.fetchUserListData(formData)
}
function handleResetClick() {
  contentRef.value.fetchUserListData()
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
