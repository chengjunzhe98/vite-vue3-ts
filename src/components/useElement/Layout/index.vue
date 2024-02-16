<template>
  <el-container class="app-container is-vertical">
    <nav-header></nav-header>
    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-main class="main-container">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup name="layout">
import leftMenu from '../LeftMenu/index.vue'
import NavHeader from '../NavHeader/index.vue'
</script>

<style lang="scss">
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}


.app-container {
  .main-container {
    height: calc(100vh - $header-height);
    overflow: auto;
  }
}
</style>
