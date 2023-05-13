import type PageContent from '@/components/page-content/index.vue'
import { ref } from 'vue'
function usePageConent() {
  const contentRef = ref<InstanceType<typeof PageContent>>()
  function handleQueryClick(formData: any) {
    contentRef.value?.fetchPageListData(formData)
  }
  function handleResetClick() {
    contentRef.value?.fetchPageListData()
  }

  return { handleResetClick, handleQueryClick, contentRef }
}

export default usePageConent
