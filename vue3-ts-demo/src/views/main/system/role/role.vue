<template>
  <div class="role">
    <page-search :search-config="searchConfig" @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <PageContent :content-config="contentConfig" ref="contentRef" @newItem="handleNewItem" @editItem="handleEditItem" />
    <PageModal :modal-config="modalConfig" ref="modalRef" :other-info="otherInfo">
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="entireMenus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handleElTreeCheck"
        />
      </template>
    </PageModal>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/index.vue'
import PageModal from '@/components/page-modal/index.vue'
import PageSearch from '@/components/page-search/index.vue'
import useMainStore from '@/store/main/main'
import { mapMenuListToIds } from '@/utils/map-meus'
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import searchConfig from './config/search.config'
const contentRef = ref<InstanceType<typeof PageContent>>()
const modalRef = ref<InstanceType<typeof PageModal>>()

const mainStore = useMainStore()
const { entireMenus } = storeToRefs(mainStore)
const treeRef = ref()
const otherInfo = ref({})
function handleQueryClick(formData: any) {
  contentRef.value?.fetchPageListData(formData)
}
function handleResetClick() {
  contentRef.value?.fetchPageListData()
}

function handleNewItem() {
  modalRef.value!.isNew = true
  modalRef.value!.dialogVisible = true
}

function handleEditItem(itemData: any) {
  modalRef.value!.isNew = false
  modalRef.value!.dialogVisible = true
  modalRef.value?.setFormData(itemData)
  editCallback(itemData)
}

function handleElTreeCheck(data1: any, data2: any) {
  const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
  otherInfo.value = { menuList }
}

function editCallback(itemData: any) {
  nextTick(() => {
    const menuIds = mapMenuListToIds(itemData.menuList)
    treeRef.value?.setCheckedKeys(menuIds)
  })
}
</script>

<style lang="less" scoped></style>
