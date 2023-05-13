<template>
  <div class="role">
    <page-search :search-config="searchConfig" @query-click="handleQueryClick" @reset-click="handleResetClick" />
    <PageContent :content-config="contentConfig" ref="contentRef" @newItem="handleNewItem" @editItem="handleEditItem" />
    <PageModal :modal-config="modalConfigRef" ref="modalRef"> </PageModal>
  </div>
</template>

<script setup lang="ts">
import PageContent from '@/components/page-content/index.vue'
import PageModal from '@/components/page-modal/index.vue'
import PageSearch from '@/components/page-search/index.vue'

import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

import useMainStore from '@/store/main/main'
import { computed } from 'vue'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import searchConfig from './config/search.config'

const { handleResetClick, handleQueryClick, contentRef } = usePageContent()
const { modalRef, handleNewItem, handleEditItem } = usePageModal()

const modalConfigRef = computed(() => {
  const mainStore = useMainStore()
  const departments = mainStore.entireDepartments.map((item) => {
    return { label: item.name, value: item.id }
  })
  modalConfig.formItems.forEach((item) => {
    if (item.prop === 'parentId') {
      item.options.push(...departments)
    }
  })

  return modalConfig
})
</script>

<style lang="less" scoped></style>
