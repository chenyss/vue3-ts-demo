import type { IModalConfig } from '@/components/page-modal/type'
const modalConfig: IModalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品'
  },
  formItems: [
    {
      type: 'input',
      label: '商品名称',
      prop: 'name',
      placeholder: '请输入商品名称'
    },
    {
      type: 'input',
      label: '价格',
      prop: 'newPrice',
      placeholder: '请输入商品价格'
    },
    {
      type: 'input',
      label: '商品描述',
      prop: 'desc',
      placeholder: '请输入商品描述'
    },
    {
      label: '状态',
      prop: 'status',
      type: 'select',
      placeholder: '请选择商品状态',
      options: [
        { label: '可用', value: 1 },
        { label: '下架', value: 0 }
      ]
    },
    {
      type: 'input',
      label: '图片',
      prop: 'imgUrl',
      placeholder: '请输入图片地址'
    },
    {
      type: 'input',
      label: '商品库存',
      prop: 'inventoryCount',
      placeholder: '请输入商品库存'
    },
    {
      type: 'input',
      label: '地址',
      prop: 'address',
      placeholder: '请输入地址'
    }
  ]
}

export default modalConfig
