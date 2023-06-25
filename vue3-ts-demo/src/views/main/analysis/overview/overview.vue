<template>
  <el-card class="box-card" :style="{ width: '100%' }">
    <template #header>
      <div class="card-header">
        <span>技术栈</span>
      </div>
    </template>
    <ul>
      <li>开发工具 :Visual Studio Code</li>
      <li>编程语言 :TypeScript + JavaScript</li>
      <li>构建工具 :Vite</li>
      <li>前端框架 :Vue 3</li>
      <li>路由工具 :Vue Router</li>
      <li>状态管理 :Pinia</li>
      <li>UI 框架 :Element UI</li>
      <li>可视化 :Echart</li>
      <li>HTTP 工具 :Axios</li>
      <li>代码规范 :Prettier + ESLint</li>
      <li>CSS 预编译 :Less</li>
    </ul>
  </el-card>
</template>

<style lang="less" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

li {
  margin-bottom: 5px;
}
</style>
