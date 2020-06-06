<template>
  <div class="toolbar-wrapper">
    <i data-command="undo" class="command el-icon-refresh-left" title="撤销" />
    <i data-command="redo" class="command el-icon-refresh-right" title="重做" />
    <i data-command="delete" class="command el-icon-delete" title="删除" />
    <i data-command="clear" class="command el-icon-s-release" title="清除画布" />
    <i data-command="zoomOut" class="command el-icon-zoom-out" title="缩小" />
    <i data-command="zoomIn" class="command el-icon-zoom-in" title="放大" />
    <i data-command="autoZoom" class="command el-icon-menu" title="适应页面" />
    <i data-command="resetZoom" class="command el-icon-c-scale-to-original" title="实际大小" />
    <i data-command="save" class="command el-icon-finished" title="保存" />
  </div>
</template>

<style lang="scss" scoped>
$backgroundColor: #fbfbfb;
$borderColor: #dadce0;

.toolbar-wrapper {
  height: 36px;
  background: $backgroundColor;
  border-bottom: 1px solid $borderColor;
  padding: 4px 14px;
  user-select: none;
  i {
    font-size: 18px;
    padding: 4px;
    margin-right: 8px;
    color: #999999;
    &:hover {
      cursor: pointer;
      background-color: #eeeeee;
      color: #5cb6ff;
    }
  }
}
</style>
