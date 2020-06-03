<template>
  <div class="organize-wrapper">
    <el-button @click="show = true">选择人员</el-button>
    <div class="data">{{ saveData }}</div>
    <el-dialog
      :title="title"
      :visible.sync="show"
      custom-class="dialog-large"
      top="10vh"
      @open="handleOpen"
      @closed="handleClosed"
    >
      <el-tabs v-model="activeName" @tab-click="handleClearAll">
        <el-tab-pane label="多选" name="checkbox">
          <tree
            v-loading="treeLoading"
            :type="activeName"
            :data="treeData"
            :source-data="sourceData"
            :checked-keys="checkedKeys"
            @handleCheck="handleCheck"
          />
        </el-tab-pane>
        <el-tab-pane label="单选" name="radio">
          <tree
            v-loading="treeLoading"
            :type="activeName"
            :data="treeData"
            :source-data="sourceData"
            :checked-keys="checkedKeys"
            @handleCheck="handleCheck"
          />
        </el-tab-pane>
      </el-tabs>
      <el-container class="selected-wrapper">
        <el-header height="50px">
          <div class="selected-num">{{ `已选人员(${checkedArr.length})` }}</div>
          <el-button size="medium" type="text" class="clear-btn" @click="handleClearAll">清空</el-button>
        </el-header>
        <el-main>
          <ul>
            <li v-for="item in checkedArr" :key="item.id">
              <p>{{ item.label }}</p>
              <p>{{ item.parent.label }}</p>
              <el-button type="text" icon="el-icon-error" @click="handleDelete(item.id)" />
            </li>
          </ul>
        </el-main>
      </el-container>
      <div slot="footer" class="dialog-footer">
        <el-button size="medium" @click="show = false">取消</el-button>
        <el-button size="medium" type="primary" :loading="saving" @click="handleSubmit">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getTreeData } from '@/api/organize'
import Tree from './components/Tree'
export default {
  name: 'Organize',
  components: {
    Tree
  },
  data() {
    return {
      show: false,
      title: '选择人员',
      activeName: 'checkbox',
      saving: false,
      treeLoading: false,
      treeData: [],
      sourceData: [],
      checkedKeys: [],
      checkedArr: [],
      checkedChildKeys: [],
      saveData: []
    }
  },
  watch: {
    // 根据keys查找选中节点数据
    checkedKeys(data) {
      this.checkedArr = []
      this.checkedChildKeys = []
      data.forEach(key => {
        const arr = this.sourceData.filter(item => item.id === key)
        arr.forEach(el => {
          if (el.parent && !el.children) {
            this.checkedArr.push(el)
            this.checkedChildKeys.push(el.id)
          }
        })
      })
    }
  },
  mounted() {
    const data = localStorage.getItem('checkedArr')
    this.saveData = data ? JSON.parse(data) : []
  },
  methods: {
    // 获取tree数据
    async handleOpen() {
      if (!this.treeData.length) {
        this.treeLoading = true
        this.sourceData = []
        const res = await getTreeData()
        this.treeData = res
        this.treeLoading = false
        this.formatData(res)
      }
      const data = JSON.parse(localStorage.getItem('checkedKeys'))
      const name = localStorage.getItem('type')
      this.checkedKeys = data
      this.activeName = name || 'checkbox'
    },
    handleClosed() {
      this.checkedKeys = []
    },
    // tree组件调用
    handleCheck(data) {
      this.checkedKeys = data
    },
    // 扁平化树形数据
    formatData(data, parent) {
      data.forEach(el => {
        parent && parent.id !== undefined ? this.sourceData.push({ ...el, parent }) : this.sourceData.push(el)
        el.children && el.children.length > 0 ? this.formatData(el.children, el) : ''
      })
    },
    // 删除选中节点
    handleDelete(id) {
      const index = this.checkedChildKeys.indexOf(id)
      if (index > -1) {
        this.checkedChildKeys.splice(index, 1)
        this.checkedKeys = [...this.checkedChildKeys]
      }
    },
    // 清空
    handleClearAll() {
      this.checkedKeys = []
    },
    handleSubmit() {
      this.show = false
      const arr = JSON.parse(JSON.stringify(this.checkedArr))
      arr.map(item => {
        delete item.parent
      })
      localStorage.setItem('checkedKeys', JSON.stringify(this.checkedKeys))
      localStorage.setItem('checkedArr', JSON.stringify(arr))
      localStorage.setItem('type', this.activeName)
      this.saveData = arr
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";

.organize-wrapper {
  height: 100%;
  .data {
    @include scrollBar;
    height: calc(100% - 60px);
    margin-top: 10px;
    overflow: auto;
  }
}

.el-tabs /deep/ {
  float: left;
  width: calc(100% - 320px);
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  background: #FAFAFB;
  .el-tabs__nav-wrap {
    padding: 12px 20px 0 20px;
  }
  .el-tabs__content .el-tab-pane {
    height: 394px;
  }
  .el-tabs__nav-wrap::after {
    height: 1px;
  }
}

.selected-wrapper {
  float: right;
  width: 300px;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  background: #FAFAFB;

  .el-header {
    padding: 24px 14px 0 14px;

    .selected-num {
      float: left;
    }
    .clear-btn {
      float: right;
      padding: 0;
      border: none;
      color: #515B66;
      font-size: 12px;
    }
  }
  .el-main {
    @include scrollBar;
    height: 410px;
    padding: 0 14px 16px 14px;;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;

      li {
        position: relative;
        padding-top: 16px;
        padding-right: 50px;
        border-bottom: 1px solid #EBEEF5;

        p {
          @include ellipsis;
          margin: 0;
        }
        p:nth-of-type(2) {
          padding: 4px 0 10px 0;
          font-size: 12px;
          color: #737D89;
        }
        .el-button {
          display: none;
          position: absolute;
          top: 50%;
          right: 4px;
          transform: translateY(-50%);
          z-index: 2;
          color: #C0C4CC;
          padding: 0;
        }
        &:hover {
          .el-button {
            display: block;
          }
        }
      }
    }
  }
}
</style>
