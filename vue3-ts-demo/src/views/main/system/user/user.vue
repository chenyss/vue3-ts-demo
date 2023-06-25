<template>
  <div class="user">
    <userSearch @queryClick="handleQueryClick" @resetClick="handleResetClick" />
    <userContent ref="contentRef" @newUser="handleNewUser" @editUser="handleEditUser" />
    <usermodal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userContent from './c-cpns/user-content.vue'
import usermodal from './c-cpns/user-modal.vue'
import userSearch from './c-cpns/user-search.vue'

const contentRef = ref<InstanceType<typeof userContent>>()
const modalRef = ref<InstanceType<typeof usermodal>>()
function handleQueryClick(formData: any) {
  contentRef.value?.fetchUserListData(formData)
}
function handleResetClick() {
  contentRef.value?.fetchUserListData()
}

function handleNewUser() {
  modalRef.value!.isNew = true
  modalRef.value!.dialogVisible = true
  modalRef.value?.setFormData()
}

function handleEditUser(itemData: any) {
  modalRef.value!.isNew = false
  modalRef.value!.dialogVisible = true
  modalRef.value?.setFormData(itemData)
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 8px;
  overflow: hidden;
}
</style>
