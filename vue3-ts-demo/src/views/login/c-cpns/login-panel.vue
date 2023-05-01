<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="activeName" type="border-card" stretch>
      <el-tab-pane label="账号登录" name="account">
        <template #label>
          <div class="tab-title">
            <el-icon><User /></el-icon>
            <div class="text">账号登录</div>
          </div>
        </template>
        <PanelAcctount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane label="手机登录" name="phone">
        <template #label>
          <div class="tab-title">
            <el-icon><Iphone /></el-icon>
            <div class="text">手机登录</div>
          </div>
        </template>
        <PanelPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="password-options">
      <el-checkbox v-model="isRemPassword" label="记住密码" />
      <div>忘记密码</div>
    </div>
    <el-button type="primary" @click="handleLoginBtnClick" class="login-btn">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PanelAcctount from './panel-account.vue'
import PanelPhone from './panel-phone.vue'
const activeName = ref('account')
const isRemPassword = ref(false)
const accountRef = ref<InstanceType<typeof PanelAcctount>>()
function handleLoginBtnClick() {
  if (activeName.value === 'account') {
    accountRef.value?.loginAction()
  }
}
</script>

<style lang="less" scoped>
.login-panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }
  .tab-title {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }
  .password-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
    // --el-button-size: 50px;
  }
}
</style>
