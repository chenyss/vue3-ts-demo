<template>
  <div class="panel-acctount">
    <el-form :model="form" label-width="60px" size="large" status-icon>
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  password: ''
})
</script>

<style lang="less" scoped></style>
