import type { IModalConfig } from '@/components/page-modal/type'
const modalConfig: IModalConfig = {
  pageName: 'category',
  header: {
    newTitle: '新建分类',
    editTitle: '编辑分类'
  },
  formItems: [
    {
      type: 'input',
      label: '分类名称',
      prop: 'name',
      placeholder: '请输入分类名称'
    }
  ]
}

export default modalConfig
