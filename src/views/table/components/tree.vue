<template>
  <div class="tree-inner">
    <el-input
      v-model="filterText"
      clearable
      class="filter-input"
      size="medium"
      placeholder="请输入"
      prefix-icon="el-icon-search"
    />
    <el-tree
      ref="tree"
      class="filter-tree"
      node-key="id"
      highlight-current
      default-expand-all
      :data="data"
      :expand-on-click-node="false"
      :current-node-key="'0'"
      :props="defaultProps"
      :filter-node-method="filterNode"
      @node-click="handleNodeClick"
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
         id: '0',
         children: [{
           label: '一级 1',
           id: '1',
           children: [{
             label: '二级 1-1',
             id: '1-1',
             children: [{
               id: '1-1-1',
               label: '三级 1-1-1'
             }]
           }]
         }, {
           label: '一级 2',
           id: '2',
           children: [{
             label: '二级 2-1',
             id: '2-1',
             children: [{
               id: '2-1-1',
               label: '三级 2-1-1'
             }]
           }, {
             label: '二级 2-2',
             id: '2-2',
             children: [{
               id: '2-2-1',
               label: '三级 2-2-1'
             }]
           }]
         }, {
           label: '一级 3',
           id: '3',
           children: [{
             label: '二级 3-1',
             id: '3-1',
             children: [{
               label: '三级 3-1-1三级 3-1-1三级 3-1-1三级 3-1-1',
               id: '3-1-1'
             }]
           }, {
             label: '二级 3-2',
             id: '3-2',
             children: [{
               id: '3-2-1',
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
      this.$emit('handleTree', data.id)
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/mixin.scss";

.tree-inner{
  .filter-input {
    margin-bottom: 16px;
  }

  .filter-tree {
    @include scrollBar;
    overflow: auto;
    height: calc(100% - 36px - 20px);
    background: transparent;

    &.el-tree--highlight-current .el-tree-node.is-current > .el-tree-node__content {
      color: #FFF;
      border-radius: 3px;
      background-color: #1D8AFA;
    }
    .el-tree-node__label {
      @include ellipsis;
    }
  }
}
</style>
