<template>
  <div class="tree-inner">
    <div style="padding: 0 14px">
      <el-input
        v-model="filterText"
        clearable
        class="filter-input"
        size="medium"
        placeholder="搜索"
        prefix-icon="el-icon-search"
      />
    </div>
    <el-tree
      ref="tree"
      class="filter-tree"
      node-key="id"
      highlight-current
      default-expand-all
      :data="treeData"
      :check-on-click-node="true"
      :expand-on-click-node="false"
      :show-checkbox="type==='checkbox'"
      :props="defaultProps"
      :filter-node-method="filterNode"
      :render-content="renderContent"
      @check="handleCheck"
    />
    <el-button-group>
      <el-button size="medium" @click="handleUnfold(true)">全部展开</el-button>
      <el-button size="medium" @click="handleUnfold(false)">全部收起</el-button>
    </el-button-group>
  </div>
</template>
<script>
export default {
  name: 'Tree',
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    sourceData: {
      type: Array,
      required: true
    },
    checkedKeys: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filterText: '',
      radio: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  computed: {
    treeData() {
      let treeData = []
      const data = JSON.parse(JSON.stringify(this.data))
      if (this.type === 'radio') {
        treeData = data.map(item => {
          if (item.children) item.disabled = true
          return item
        })
      } else {
        treeData = [...data]
      }
      return treeData
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
    },
    checkedKeys(arr) {
      if (this.type === 'radio') {
        this.radio = arr.length ? arr[0] : ''
      }
      this.$refs.tree.setCheckedKeys(arr)
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    // 返回选中keys
    handleCheck(data) {
      if (this.type === 'radio') {
        this.$emit('handleCheck', [data.id])
      } else {
        const arr = this.$refs.tree.getCheckedKeys()
        this.$emit('handleCheck', arr)
      }
    },
    // 全部展开/收起
    handleUnfold(bol) {
      const _this = this
      const treeList = this.sourceData
      const len = this.sourceData.length
      for (let i = 0; i < len; i++) {
        _this.$refs.tree.store.nodesMap[treeList[i].id].expanded = bol
      }
    },
    // 自定义节点
    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          { this.type === 'radio' && !data.children ? <span><el-radio v-model={this.radio} label={data.id}></el-radio></span> : ''}
          <span class='icon' >{ data.children ? <i class='el-icon-folder'></i> : <i class='el-icon-user'></i> }</span>
          <span>{node.label}</span>
        </span>
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.tree-inner{
  position: relative;
  height: 100%;

  .filter-input {
    margin-bottom: 16px;
  }

  .filter-tree {
    @include scrollBar;
    overflow: auto;
    height: calc(100% - 36px - 20px - 28px);
    padding-left: 12px;
    background: transparent;

    /deep/ .custom-tree-node {
      .icon {
        margin-right: 6px;
        color: #0b83df;
      }
      .el-radio__input {
        margin-right: 6px;
      }
      .el-radio__label {
        display: none;
      }
    }
  }

  .el-button-group {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: transparent;

    .el-button {
      color: #737D89;
      font-size: 12px;
      border: none;
      border-radius: 0;
      background: #F5F5F5;
    }

    .el-button:nth-last-of-type(2) {
      width: 50%;
      border-bottom-left-radius: 4px;
    }

    .el-button:nth-last-of-type(1) {
      width: calc(50% + 1px);
      border-bottom-right-radius: 4px;
    }

    .el-button:hover {
      color: #1D8AFA;
      background-color: #e8f3ff;
    }
  }
}
</style>
