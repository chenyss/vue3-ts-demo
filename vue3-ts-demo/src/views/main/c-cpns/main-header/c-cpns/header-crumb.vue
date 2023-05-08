<template>
  <div class="curmb">
    <el-breadcrumb separator-icon="CaretRight">
      <template v-for="item in breadcrumbs" :key="item.name">
        <el-breadcrumb-item :to="item.path">
          {{ item.name }}
        </el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/index'
import { mapPathToBreadcrumbs } from '@/utils/map-meus'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const loginStore = useLoginStore()

const breadcrumbs = computed(() => {
  return mapPathToBreadcrumbs(route.path, loginStore.userMenuInfo)
})
</script>

<style lang="less" scoped>
.curmb {
  color: red;
}
</style>
