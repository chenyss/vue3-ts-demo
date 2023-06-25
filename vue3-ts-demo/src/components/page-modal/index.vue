<template>
  <div class="modal">
    <el-dialog v-model="dialogVisible" :title="isNew ? '新建用户' : '编辑用户'" width="30%" center>
      <div class="form">
        <el-form :model="formData" label-width="80px" size="large">
          <template v-for="(item, index) in modalConfig.formItems" :key="index">
            <el-form-item :label="item.label" :prop="item.prop">
              <template v-if="item.type === 'input'">
                <el-input v-model="formData[item.prop]" :placeholder="item.placeholder" clearable />
              </template>
              <template v-if="item.type === 'date-picker'">
                <el-date-picker
                  v-model="formData[item.prop]"
                  type="daterange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="结束时间"
                />
              </template>
              <template v-if="item.type === 'select'">
                <el-select v-model="formData[item.prop]" :placeholder="item.placeholder" style="width: 100%">
                  <template v-for="option in item.options" :key="option.value">
                    <el-option :label="option.label" :value="option.value" />
                  </template>
                </el-select>
              </template>
              <template v-if="item.type === 'custom'">
                <slot :name="item.slotName"></slot>
              </template>
            </el-form-item>
          </template>
        </el-form>
      </div>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick"> 确定 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system'
import { storeToRefs } from 'pinia'
import { reactive, ref } from 'vue'
interface IProps {
  modalConfig: {
    pageName: string
    header: { newTitle: string; editTitle: string }
    formItems: any[]
  }
  otherInfo?: any
}
const props = defineProps<IProps>()
const isNew = ref(true)
const dialogVisible = ref(false)
const initialForm: any = {}

for (const item of props.modalConfig.formItems) {
  if (item.prop) {
    initialForm[item.prop] = item.initialValue ?? ''
  }
}
let formData = reactive(initialForm)
const editData = ref()

const mainStore = useMainStore()
const systemStore = useSystemStore()
const { entireRoles, entireDepartments } = storeToRefs(mainStore)

function setFormData(itemData: any = false) {
  if (!isNew.value && itemData) {
    // 编辑数据
    for (const key in formData) {
      formData[key] = itemData[key]
    }
    editData.value = itemData
  } else {
    // 新建数据
    for (const key in formData) {
      formData[key] = ''
    }
    editData.value = null
  }
}
function handleConfirmClick() {
  if (props.otherInfo) {
    formData = { ...formData, ...props.otherInfo }
  }
  if (isNew.value) {
    systemStore.newPageDataAction(props.modalConfig.pageName, formData)
    dialogVisible.value = false
  } else {
    dialogVisible.value = false
    systemStore.editPageDataAction(props.modalConfig.pageName, editData.value.id, formData)
  }
}

defineExpose({ dialogVisible, isNew, setFormData })
</script>

<style lang="less" scoped>
.form {
  padding: 0 20px;
}
</style>
