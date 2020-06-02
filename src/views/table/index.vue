<template>
  <div class="table-container">
    <tree class="tree-wrapper" @handleTree="handleTreeData" />
    <el-container v-loading="tableLoading" class="table-wrapper">
      <el-header height="auto">
        <div v-show="showSearch" class="search-wrapper">
          <el-form ref="searchForm" :inline="true" :model="searchForm" class="search-form">
            <el-form-item label="目录名称" prop="fileName">
              <el-input v-model="searchForm.fileName" size="small" placeholder="请输入" />
            </el-form-item>
            <el-form-item label="创建人" prop="createName">
              <el-input v-model="searchForm.createName" size="small" placeholder="请输入" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="small" @click="getTableData()">查询</el-button>
              <el-button size="small" @click="handleReset">重置</el-button>
            </el-form-item>
            <el-button size="medium" type="text" class="filter-close-btn" @click="showSearch = false">
              收起
            </el-button>
          </el-form>
        </div>
        <div class="operate-wrapper">
          <el-button size="medium" plain @click="handleAddOrEdit()">新增数据</el-button>
          <el-button size="medium" type="text" class="filter-btn" @click="showSearch = true">
            筛选条件
            <i class="el-icon-s-promotion el-icon--right" />
          </el-button>
        </div>
      </el-header>
      <el-main>
        <table-list :table-data="tableData" :table-height="tableHeight" @handleEdit="handleAddOrEdit" @handleDelete="handleDelete" />
      </el-main>
      <el-footer height="auto">
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
    <add-or-edit :show="showForm" :title="formTitle" :form-data="formData" :saving="saving" @closeForm="closeForm" @handleFormData="handleFormData" />
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
      treeFilterData: '',
      showSearch: false,
      searchForm: {
        fileName: '',
        createName: ''
      },
      tableLoading: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [],
      showForm: false,
      formTitle: '',
      formData: {},
      saving: false
    }
  },
  computed: {
    tableHeight() {
      // 表格高度为 可视高度 - navbar - 面包屑 - padding - 新增/筛选按钮 - padding - 分页 - 筛选条件
      // 100vh - 60px - 50px - 40px - 36px - 40px - 68px - 78px
      if (this.showSearch) {
        return 'calc(100vh - 372px)'
      }
      return 'calc(100vh - 294px)'
    }
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    // 获取列表数据
    getTableData() {
      this.tableLoading = true
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
      // tree 筛选条件
      params.treeFilterData = this.treeFilterData
      getTableList(params).then(res => {
        const { data, pageInfo: { total }} = res
        this.tableData = data
        this.total = total
        this.tableLoading = false
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
    // 根据 tree 数据请求列表
    handleTreeData(data) {
      this.treeFilterData = data
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
      this.saving = true
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
          type: 'success',
          center: true
        })
        this.getTableData()
        this.showForm = false
        this.saving = false
      }
    },
    // 删除
    handleDelete(id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableLoading = true
        deleteTableItem(id).then(res => {
          if (res.code === 200) {
            this.$message({
              message: '删除成功',
              type: 'success',
              center: true
            })
            this.getTableData()
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.table-container{
  height: 100%;
  background: #FFF;
  box-shadow: 0 0 5px 0px rgba(0, 21, 41, 0.08);

  .search-wrapper {
    position: relative;
    min-height: 66px;
    padding: 12px 24px;
    margin-bottom: 12px;
    border-radius: 6px;
    border: 1px solid #EBEEF5;
    background: #FAFAFB;

     &::before {
      @include triangle(
        $direction: bottom,
        $position: top 100% right 42px,
        $color: #EBEEF5,
        $size: 10px
      );
    }

    &::after {
      @include triangle(
        $direction: bottom,
        $position: top 100% right 44px,
        $color: #FAFAFB,
        $size: 8px
      );
    }

    .el-form--inline .el-form-item {
      margin-right: 16px;
      margin-bottom: 0;
    }

    .filter-close-btn {
      color: #515B66;
      float: right;
      margin-top: 4px;
    }
  }

  .operate-wrapper {
    @include clearfix;
    height: 36px;
    .filter-btn {
      float: right;
      color: #515B66;
      padding: 0;
      padding-top: 12px;
    }
  }

  .tree-wrapper {
    display: inline-block;
    width: 220px;
    height: 100%;
    padding: 20px 12px;
    background: #FBFCFE;
  }

  .table-wrapper {
    display: inline-block;
    width: calc(100% - 220px);
    padding: 20px 13px;
    vertical-align: top;
  }
}
</style>
