<template>
  <div class="panel-acctount">
    <el-form :model="account" label-width="70px" size="large" status-icon :rules="accountRules" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" type="password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { LOGIN_NAME, LOGIN_PASSWORD } from '@/global/constant'
import useLogin from '@/store/login'
import { localCache } from '@/utils/cache'
import type { ElForm, FormRules } from 'element-plus'
import { ElMessage } from 'element-plus'
import { reactive, ref } from 'vue'

const account = reactive({
  name: localCache.getCache(LOGIN_NAME) ?? '',
  password: localCache.getCache(LOGIN_PASSWORD) ?? ''
})

const accountRules: FormRules = {
  name: [
    { required: true, message: '必须输入帐号信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,20}$/,
      message: '必须是6~20数字或字母组成~',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '必须输入密码信息~', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '必须是3位以上数字或字母组成',
      trigger: 'blur'
    }
  ]
}

const formRef = ref<InstanceType<typeof ElForm>>()

const loginStore = useLogin()
function loginAction(isRemPassword: boolean) {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.获取用户输入的帐号和密码
      const name = account.name
      const password = account.password
      loginStore.loginAccountAction({ name, password }).then(() => {
        if (isRemPassword) {
          localCache.setCache(LOGIN_NAME, account.name)
          localCache.setCache(LOGIN_PASSWORD, account.password)
        }
      })
    } else {
      ElMessage.error('请您输入正确的格式后再操作')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped></style>
