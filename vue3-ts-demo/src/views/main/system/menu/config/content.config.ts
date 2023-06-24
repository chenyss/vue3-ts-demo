const contentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表',
    btnTitle: '新建菜单'
  },
  hasChild: true,
  propsList: [
    { type: 'normal', label: '级别', prop: 'type' },
    { type: 'normal', label: '菜单url', prop: 'url' },
    { type: 'normal', label: '菜单icon', prop: 'icon' },
    { type: 'normal', label: '排序', prop: 'sort' },
    { type: 'timer', label: '创建时间', prop: 'createAt', width: '180px' },
    { type: 'timer', label: '更新时间', prop: 'updateAt', width: '180px' },
    { type: 'handler', label: '操作', width: '150px' }
  ]
}
export default contentConfig
