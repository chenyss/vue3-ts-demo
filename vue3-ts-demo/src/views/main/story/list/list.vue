<template>
  <div class="role">
    <PageContent :content-config="contentConfig" />
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/index.vue'
import contentConfig from './config/content.config'
</script>

<style lang="less" scoped></style>
