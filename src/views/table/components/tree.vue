<template>
  <div>

    <el-input
      v-model="filterText"
      size="small"
      placeholder="请输入"
      prefix-icon="el-icon-search"
    />

    <el-tree
      ref="tree"
      class="filter-tree"
      :data="data"
      :props="defaultProps"
      default-expand-all
      :filter-node-method="filterNode"
      @click="handleNodeClick"
    />
  </div>
</template>
<script>
export default {
  name: 'Tree',
  data() {
    return {
      filterText: '',
      data:
       [{
         label: '全部',
         children: [{
           label: '一级 1',
           children: [{
             label: '二级 1-1',
             children: [{
               label: '三级 1-1-1'
             }]
           }]
         }, {
           label: '一级 2',
           children: [{
             label: '二级 2-1',
             children: [{
               label: '三级 2-1-1'
             }]
           }, {
             label: '二级 2-2',
             children: [{
               label: '三级 2-2-1'
             }]
           }]
         }, {
           label: '一级 3',
           children: [{
             label: '二级 3-1',
             children: [{
               label: '三级 3-1-1'
             }]
           }, {
             label: '二级 3-2',
             children: [{
               label: '三级 3-2-1'
             }]
           }]
         }]
       }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    }
  },
  methods: {
    handleNodeClick(data) {
      console.log(data)
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>
