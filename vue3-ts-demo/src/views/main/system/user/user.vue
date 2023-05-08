<template>
  <div class="user">
    <userSearch />
    <UserContent />
  </div>
</template>

<script setup lang="ts">
import UserContent from './c-cpns/user-content.vue'
import userSearch from './c-cpns/user-search.vue'
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
