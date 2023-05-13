import type PageModal from '@/components/page-modal/index.vue'
import { ref } from 'vue'
type callBcakFnType = (data?: any) => void

function usePageModal(editCallback?: callBcakFnType, newCallback?: callBcakFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewItem() {
    modalRef.value!.isNew = true
    modalRef.value!.dialogVisible = true
    if (newCallback) {
      newCallback()
    }
  }

  function handleEditItem(itemData: any) {
    modalRef.value!.isNew = false
    modalRef.value!.dialogVisible = true
    modalRef.value?.setFormData(itemData)
    if (editCallback) {
      editCallback(itemData)
    }
  }

  return { modalRef, handleNewItem, handleEditItem }
}
export default usePageModal
