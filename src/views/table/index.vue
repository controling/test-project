<template>
  <div class="table-container">
    <el-scrollbar wrap-class="tree-wrapper">
      <tree />
    </el-scrollbar>
    <el-container class="table-wrapper">
      <el-header>
        <el-button @click="handleAddOrEdit()">新增</el-button>
        <el-button-group>
          <el-button type="primary">筛选</el-button>
        </el-button-group>
      </el-header>
      <el-main>
        <table-list :table-data="tableData" @addOrEdit="handleAddOrEdit" @delete="handleDelete" />
      </el-main>
      <el-footer>
        <el-pagination
          background
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 30, 40, 50, 100]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-footer>
    </el-container>
    <add-or-edit :show="showForm" :title="formTitle" :form-data="formData" @closeForm="closeForm" @handleFormData="handleFormData" />
  </div>
</template>
<script>
import Tree from './components/tree'
import AddOrEdit from './components/add-or-edit'
import TableList from './components/table-list'
import { getTableList, addTableItem, editTableItem, deleteTableItem } from '@/api/table'

export default {
  name: 'Table',
  components: {
    Tree,
    AddOrEdit,
    TableList
  },
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      showForm: false,
      formTitle: '',
      formData: {}
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    // 获取列表数据
    getTableData() {
      const params = {
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }
      getTableList(params).then(res => {
        const { data, pageInfo: { currentPage, total }} = res
        this.tableData = data
        this.total = total
        this.currentPage = currentPage
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getTableData()
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.getTableData()
    },
    // 表单调用关闭弹窗
    closeForm() {
      this.showForm = false
    },
    // 新增/修改列表数据
    handleAddOrEdit(data) {
      this.showForm = true
      if (data) {
        this.formData = data
        this.formTitle = '修改'
      } else {
        this.formData = {}
        this.formTitle = '新增'
      }
    },
    // 处理新增/修改表单提交的数据
    async handleFormData(data) {
      let res = null
      if (Object.keys(this.formData).length) {
        // 调用修改接口
        res = await editTableItem(data)
      } else {
        // 调用新增接口
        res = await addTableItem(data)
      }
      if (res.code === 200) {
        this.$message({
          message: `${this.formTitle}成功`,
          type: 'success'
        })
        this.getTableData()
        this.showForm = false
      }
    },
    // 删除
    handleDelete(id) {
      deleteTableItem(id).then(res => {
        if (res.code === 200) {
          this.$message({
            message: '删除成功',
            type: 'success'
          })
          this.getTableData()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.table-container{
  height: 100%;
  .el-scrollbar {
    display: inline-block;
    width: 220px;
    height: 100%;
    background: #FBFCFE;
  }
  .tree-wrapper {
    padding: 24px 12px;

    overflow-x: hidden !important;
  }
  .table-wrapper {
    display: inline-block;
    width: calc(100% - 220px);
    vertical-align: top;
  }
}
</style>
