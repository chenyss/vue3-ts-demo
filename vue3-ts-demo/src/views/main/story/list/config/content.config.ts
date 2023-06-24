const contentConfig = {
  pageName: 'story',
  header: {
    title: '商品列表',
    btnTitle: '新建商品'
  },
  propsList: [
    { type: 'index', label: '序号', width: '80px' },

    { type: 'normal', label: '故事标题', prop: 'title', width: '180px' },
    { type: 'normal', label: '故事内容', prop: 'content' },
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '180px' }
  ]
}
export default contentConfig
