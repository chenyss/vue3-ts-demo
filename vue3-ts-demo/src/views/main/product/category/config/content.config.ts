const contentConfig = {
  pageName: 'category',
  header: {
    title: '类别列表',
    btnTitle: '新建分类'
  },
  propsList: [
    { type: 'index', label: '序号', width: '80px' },

    { type: 'normal', label: '类别名称', prop: 'name', width: '150px' },
    { type: 'timer', label: '创建时间', prop: 'createAt' },
    { type: 'timer', label: '更新时间', prop: 'updateAt' },

    { type: 'handler', label: '操作', width: '150px' }
  ]
}
export default contentConfig
