import type PageModal from '@/components/page-modal/index.vue'
import { ref } from 'vue'
type EditFnType = (data: any) => void

function usePageModal(editCallback: EditFnType) {
  const modalRef = ref<InstanceType<typeof PageModal>>()
  function handleNewItem() {
    modalRef.value!.isNew = true
    modalRef.value!.dialogVisible = true
  }

  function handleEditItem(itemData: any) {
    modalRef.value!.isNew = false
    modalRef.value!.dialogVisible = true
    modalRef.value?.setFormData(itemData)
    if (editCallback) editCallback(itemData)
  }

  return { modalRef, handleNewItem, handleEditItem }
}
export default usePageModal
