<template>
  <div class="content">
    <div class="header">
      <h3 class="title">{{ contentConfig.header.title }}</h3>
      <el-button type="primary" @click="handleNewItem" v-if="isCreate">{{ contentConfig.header.btnTitle }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border style="width: 100%">
        <template v-for="(item, index) in contentConfig.propsList" :key="index">
          <template v-if="item.type === 'timer'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ formatUTC(scope.row[item.prop]) }}
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'handler'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <el-button
                  size="small"
                  icon="Edit"
                  type="primary"
                  text
                  @click="handelEditItem(scope.row)"
                  v-if="isUpdate"
                >
                  编辑
                </el-button>
                <el-button
                  size="small"
                  icon="Delete"
                  type="danger"
                  text
                  @click="handelDeleteItem(scope.row.id)"
                  v-if="isDelete"
                >
                  删除
                </el-button>
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'custom'">
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                <slot :name="item.slotName" v-bind="scope" :prop="item.prop"></slot>
              </template>
            </el-table-column>
          </template>
          <template v-else-if="item.type === 'selection' || item.type === 'index'">
            <el-table-column align="center" v-bind="item" />
          </template>
          <template v-else>
            <el-table-column align="center" v-bind="item">
              <template #default="scope">
                {{ item.formatFun ? item.formatFun(scope.row[item.prop], item.prop) : scope.row[item.prop] }}
              </template>
            </el-table-column>
          </template>
        </template>
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
        :total="pageTotalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import usePermissions from '@/hooks/usePermissions'
import useSystemStore from '@/store/main/system'
import { formatUTC } from '@/utils/format'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

interface IProps {
  contentConfig: {
    pageName: string
    header: { title: string; btnTitle: string }
    propsList: any[]
  }
}

const props = defineProps<IProps>()

const isCreate = usePermissions(`${props.contentConfig.pageName}:create`)
const isDelete = usePermissions(`${props.contentConfig.pageName}:delete`)
const isUpdate = usePermissions(`${props.contentConfig.pageName}:update`)
const isQuery = usePermissions(`${props.contentConfig.pageName}:query`)

const pageIndex = ref(1)
const pageSize = ref(10)
const systemStore = useSystemStore()
fetchPageListData()
const { pageList, pageTotalCount } = storeToRefs(systemStore)

const emit = defineEmits(['newItem', 'editItem'])

function fetchPageListData(formData: any = {}) {
  if (!isQuery) return

  const size = pageSize.value
  const offset = (pageIndex.value - 1) * size
  const pageInfo = { size, offset }

  const queryInfo = { ...pageInfo, ...formData }
  systemStore.postPageListAction(props.contentConfig.pageName, queryInfo)
}

function handleSizeChange() {
  fetchPageListData()
}

function handleCurrentChange() {
  fetchPageListData()
}

function handelDeleteItem(id: number) {
  systemStore.deletePageByIdAction(props.contentConfig.pageName, id)
}

function handleNewItem() {
  emit('newItem')
}
function handelEditItem(itemData: any) {
  emit('editItem', itemData)
}

defineExpose({ fetchPageListData })
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
