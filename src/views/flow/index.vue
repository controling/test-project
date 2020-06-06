<template>
  <div class="editor-wrapper">
    <tool-bar id="toolbar" />
    <el-row>
      <el-col :span="2">
        <item-pannel id="itempannel" />
      </el-col>
      <el-col :span="22">
        <div id="page" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import G6Editor from '@antv/g6-editor'
import ItemPannel from './components/ItemPannel'
import ToolBar from './components/ToolBar'

export default {
  name: 'VueG6Editor',
  components: {
    ItemPannel,
    ToolBar
  },
  data() {
    return {
      editor: null,
      data: {}
    }
  },
  watch: {
    // 数据回显
    data(obj) {
      this.editor && this.editor.getCurrentPage().read(obj)
    }
  },
  mounted() {
    const data = localStorage.getItem('flowData')
    this.data = data ? JSON.parse(data) : {}
    this.initG6Editor()
  },
  methods: {
    // 初始化
    initG6Editor() {
      const _this = this
      const editor = new G6Editor()
      this.editor = editor
      G6Editor.track(false)
      const Command = G6Editor.Command
      // 注册新命令save
      Command.registerCommand('save', {
        queue: false,
        enable: (editor) => {
          return true
        },
        execute(editor) {
          const needSaveData = editor.getCurrentPage().save()
          _this.save(needSaveData)
        }
      })
      // 画布
      const flow = new G6Editor.Flow({
        graph: {
          container: 'page'
        },
        grid: {
          cell: 14
        },
        noEndEdge: false
      })
      // 设置边
      flow.getGraph().edge({
        shape: 'flow-polyline'
      })
      // 元素面板栏
      const itempannel = new G6Editor.Itempannel({
        container: 'itempannel'
      })
      // 工具栏
      const toolbar = new G6Editor.Toolbar({
        container: 'toolbar'
      })
      // 挂载以上组件到Editor
      editor.add(flow)
      editor.add(itempannel)
      editor.add(toolbar)

      // 获取当前画布
      const currentPage = editor.getCurrentPage()

      // 监听变化
      currentPage.on('afterchange', (e) => {
        if (e.action === 'add') {
          if (e.model.nodetype === 'startNode' || e.model.nodetype === 'endNode') {
            const nodes = this.editor.getCurrentPage().getNodes()
            for (const item of nodes) {
              if (item.model.nodetype === e.model.nodetype && item.model.id !== e.model.id) {
                this.editor.getCurrentPage().remove(e.item)
                this.$message({
                  type: 'warning',
                  message: '只能有一个开始步骤或结束步骤',
                  center: true
                })
              }
            }
          }
        }
      })
      // 监听（选择对象后）事件
      currentPage.on('afteritemselected', (ev) => {})
      // 监听（删除后）事件
      currentPage.on('afterdelete', (ev) => {})
    },
    // 保存数据
    save(source) {
      console.log(source)
      localStorage.setItem('flowData', JSON.stringify(source))
      this.$message({
        type: 'success',
        message: '保存成功',
        center: true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$backgroundColor: #fbfbfb;
$borderColor: #dadce0;
$pageHeight: calc(100vh - 60px - 50px - 40px - 36px);

.editor-wrapper {
  box-shadow: 0 0 5px 0px rgba(0, 21, 41, 0.08);

  header:nth-of-type(1) {
    background: $backgroundColor;
    line-height: 40px;
    padding-left: 20px;
    border-bottom: 1px solid $borderColor;
    box-sizing: border-box;
  }
  #page {
    height: $pageHeight;
    canvas {
      display: block;
      width: 100%;
    }
  }
}
</style>
