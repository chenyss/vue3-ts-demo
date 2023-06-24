const statusFormatFun = (val: number) => {
  switch (val) {
    case 1:
      return '可用'
    case 0:
      return '下架'
    default:
      return val
  }
}
const csstext = 'overflow: hidden;text-overflow: ellipsis;white-space:nowrap;'
const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btnTitle: '新建商品'
  },
  propsList: [
    { type: 'index', label: '序号', width: '80px' },

    { type: 'normal', label: '商品名称', prop: 'name', style: csstext, showDetail: true },
    { type: 'normal', label: '原价格', prop: 'oldPrice' },
    { type: 'normal', label: '新价格', prop: 'newPrice' },
    { type: 'normal', label: '商品描述', prop: 'desc', style: csstext, showDetail: true },
    { type: 'normal', label: '状态', prop: 'status', formatFun: statusFormatFun },
    { type: 'img', label: '图片', prop: 'imgUrl' },
    { type: 'normal', label: '库存', prop: 'inventoryCount' },
    { type: 'normal', label: '销量', prop: 'saleCount' },
    { type: 'normal', label: '收藏', prop: 'favorCount' },
    { type: 'normal', label: '地址', prop: 'address' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },

    { type: 'handler', label: '操作', width: '150px' }
  ]
}
export default contentConfig
