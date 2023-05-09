<template>
  <div class="content">
    <div class="header">
      <h3 class="title">用户列表</h3>
      <el-button type="primary">新建用户</el-button>
    </div>
    <div class="table">
      <el-table :data="usersList" border style="width: 100%">
        <el-table-column align="center" type="selection" width="50px" />
        <el-table-column align="center" type="index" label="序号" width="60px" />

        <el-table-column align="center" label="用户名" prop="name" width="150px" />
        <el-table-column align="center" label="真实姓名" prop="realname" width="150px" />
        <el-table-column align="center" label="手机号码" prop="cellphone" width="150px" />
        <el-table-column align="center" label="状态" prop="enable" width="100px">
          <template #default="scope">
            <span>{{ scope.row.enable ? '启用' : '禁用' }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="创建时间" prop="createAt">
          <template #default="scope">
            <span>{{ formatUTC(scope.row.createAt) }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="更新时间" prop="updateAt">
          <template #default="scope">
            <span>{{ formatUTC(scope.row.updateAt) }}</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="150px">
          <el-button size="small" icon="Edit" type="primary" text> 编辑 </el-button>
          <el-button size="small" icon="Delete" type="danger" text> 删除 </el-button>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        v-model:current-page="pageIndex"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 40]"
        small
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="usersTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import useSystemStore from '@/store/main/system'
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

const pageIndex = ref(1)
const pageSize = ref(10)
const systemStore = useSystemStore()
fetchUserListData()
const { usersList, usersTotalCount } = storeToRefs(systemStore)
function fetchUserListData(formData: any = {}) {
  const size = pageSize.value
  const offset = (pageIndex.value - 1) * size
  const pageInfo = { size, offset }

  const queryInfo = { ...pageInfo, ...formData }
  systemStore.postUsersListAction(queryInfo)
}

function handleSizeChange() {
  fetchUserListData()
}

function handleCurrentChange() {
  fetchUserListData()
}

defineExpose({ fetchUserListData })
</script>

<style lang="less" scoped>
.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 10px;

  .title {
    font-size: 22px;
  }
}

.table {
  :deep(.el-table__cell) {
    padding: 12px 0;
  }

  .el-button {
    margin-left: 0;
    padding: 5px 8px;
  }
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
</style>
