<template>
  <div class="table-container">
    <el-scrollbar wrap-class="tree-wrapper">
      <tree />
    </el-scrollbar>
    <el-container class="table-wrapper">
      <el-header>
        hello
      </el-header>
      <el-main />
    </el-container>
  </div>
</template>
<script>
import Tree from './components/tree'
export default {
  name: 'Table',
  components: {
    Tree
  },
  data() {
    return {

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
