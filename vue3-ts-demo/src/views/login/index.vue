<template>
  <div class="home">{{ loginStore.id }}</div>
</template>

<script setup lang="ts">
import { getTestData } from '@/service/module/home'
import useLogin from '@/store/login'
import { onMounted } from 'vue'
const loginStore = useLogin()
onMounted(async () => {
  const res = await getTestData()
  console.log(res)
})
</script>

<style lang="less" scoped></style>
