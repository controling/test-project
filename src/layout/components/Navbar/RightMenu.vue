<template>
  <div>
    <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatar" class="user-avatar">
        <span class="user-name">admin</span>
        <i class="el-icon-caret-bottom" />
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          个人信息
        </el-dropdown-item>
        <el-dropdown-item divided>
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatar: require('@/assets/avatar.jpg')
    }
  }
}
</script>

