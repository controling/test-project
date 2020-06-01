<template>
  <el-table
    style="width: 100%"
    :data="tableData"
    :height="tableHeight"
  >
    <el-table-column
      prop="order"
      label="序号"
    />
    <el-table-column
      prop="file_id"
      label="目录ID"
    />
    <el-table-column
      prop="file_name"
      label="目录名称"
    />
    <el-table-column
      sortable
      prop="sort"
      label="排序号"
    />
    <el-table-column
      prop="create_name"
      label="创建人"
    />
    <el-table-column
      sortable
      prop="create_time"
      label="创建时间"
    />
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="text"
          @click="handleEdit(scope.row)"
        >修改</el-button>
        <el-button
          size="mini"
          type="text"
          @click="handleDelete(scope.row.id)"
        >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  name: 'TableList',
  props: {
    tableData: {
      type: Array,
      required: true
    },
    tableHeight: {
      type: String,
      require: false,
      default: '300px'
    }
  },
  methods: {
    handleEdit(data) {
      this.$emit('handleEdit', data)
    },
    handleDelete(id) {
      this.$emit('handleDelete', id)
    }
  }
}
</script>
