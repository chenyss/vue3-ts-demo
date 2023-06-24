<template>
  <div class="search">
    <!-- 1.输入搜索关键字的表单 -->
    <el-form
      :model="searchForm"
      ref="formRef"
      :label-width="searchConfig.labelWidth ?? '80px'"
      size="large"
      v-if="isQuery"
    >
      <el-row :gutter="20">
        <template v-for="(item, index) in searchConfig.formItems" :key="index">
          <template v-if="item.type === 'input'">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-input v-model="searchForm[item.prop]" :placeholder="item.placeholder" clearable></el-input
              ></el-form-item>
            </el-col>
          </template>
          <template v-else-if="item.type === 'date-picker'">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-date-picker
                  v-model="searchForm[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </template>
          <template v-else-if="item.type === 'select'">
            <el-col :span="8">
              <el-form-item :label="item.label" :prop="item.prop">
                <el-select v-model="searchForm[item.prop]" :placeholder="item.placeholder" style="width: 100%">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </el-form-item>
            </el-col>
          </template>
        </template>
      </el-row>
    </el-form>

    <!-- 2.重置和搜索的按钮 -->
    <div class="btns">
      <el-button icon="Refresh" @click="handleResetClick">重置</el-button>
      <el-button icon="Search" type="primary" @click="handleQueryClick">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import usePermissions from '@/hooks/usePermissions'
import type { ElForm } from 'element-plus'
import { reactive, ref } from 'vue'

// 定义自定义事件/接收的属性
interface IProps {
  searchConfig: {
    pageName: string
    labelWidth?: string
    formItems: any[]
  }
}
const props = defineProps<IProps>()
const emit = defineEmits(['queryClick', 'resetClick'])

const initialForm: any = {}
for (const item of props.searchConfig.formItems) {
  initialForm[item.prop] = item.initialValue ?? ''
}
const searchForm = reactive(initialForm)

// 重置操作
const formRef = ref<InstanceType<typeof ElForm>>()

const isQuery = usePermissions(`${props.searchConfig.pageName}:query`)

function handleResetClick() {
  formRef.value?.resetFields()
  emit('resetClick')
}

function handleQueryClick() {
  emit('queryClick', searchForm)
}
</script>

<style lang="less" scoped>
.search {
  background-color: #fff;
  padding: 20px;

  .el-form-item {
    padding: 20px 30px;
    margin-bottom: 0;
  }

  .btns {
    text-align: right;
    padding: 0 50px 10px 0;

    .el-button {
      height: 36px;
    }
  }
}
</style>
