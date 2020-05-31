<template>
  <div class="table-container">
    <el-scrollbar wrap-class="tree-wrapper">
      <tree />
    </el-scrollbar>
    <el-container class="table-wrapper">
      <el-header height="auto">
        <div class="search-wrapper">
          <el-form ref="searchForm" :inline="true" :model="searchForm" class="search-form">
            <el-form-item label="目录名称" prop="fileName">
              <el-input v-model="searchForm.fileName" placeholder="请输入" />
            </el-form-item>
            <el-form-item label="创建人" prop="createName">
              <el-input v-model="searchForm.createName" placeholder="请输入" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="getTableData()">查询</el-button>
              <el-button @click="handleReset">重置</el-button>
            </el-form-item>
          </el-form>

        </div>
        <el-button @click="handleAddOrEdit()">新增</el-button>
        <el-button-group>
          <el-button type="primary">筛选</el-button>
        </el-button-group>
      </el-header>
      <el-main>
        <table-list :table-data="tableData" @handleEdit="handleAddOrEdit" @handleDelete="handleDelete" />
      </el-main>
      <el-footer>
        <el-pagination
          background
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 40, 50, 100]"
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
import Tree from './components/Tree'
import AddOrEdit from './components/AddOrEdit'
import TableList from './components/TableList'
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
      searchForm: {
        fileName: '',
        createName: ''
      },
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
      // 筛选条件
      for (const key in this.searchForm) {
        const value = this.searchForm[key]
        if (value !== '') {
          params[key] = value
        }
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
    // 重置搜索框
    handleReset() {
      this.$refs.searchForm.resetFields()
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
