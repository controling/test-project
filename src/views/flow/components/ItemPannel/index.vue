<template>
  <div class="itempannel-wrapper">
    <div
      class="getItem"
      data-type="node"
      data-shape="flow-circle"
      data-size="72*72"
      data-label="开始步骤"
      data-color="#FA8C16"
      data-nodeType="startNode"
    >
      <img draggable="false" :src="startNodeSVGUrl" alt srcset>
    </div>
    <div
      class="getItem"
      data-type="node"
      data-size="100*50"
      data-label="审批步骤"
      data-color="#1890ff"
    >
      <img draggable="false" :src="regularNodeSVGUrl" alt srcset>
    </div>
    <div
      class="getItem"
      data-type="node"
      data-shape="flow-circle"
      data-size="72*72"
      data-label="结束步骤"
      data-color="#FA8C16"
      data-nodeType="endNode"
    >
      <img draggable="false" :src="endNodeSVGUrl">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemPannel',
  data() {
    return {
      startNodeSVGUrl: require('@/assets/start-node.svg'),
      endNodeSVGUrl: require('@/assets/end-node.svg'),
      regularNodeSVGUrl: require('@/assets/regular-node.svg')
    }
  }
}
</script>

<style lang="scss" scoped>
$backgroundColor: #fbfbfb;
$borderColor: #dadce0;
$pageHeight: calc(100vh - 60px - 50px - 40px - 36px);

.itempannel-wrapper {
  box-sizing: border-box;
  background-color: $backgroundColor;
  border-right: 1px solid $borderColor;
  height: $pageHeight;
  padding-top: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  .getItem {
    cursor: move;
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
}
</style>
