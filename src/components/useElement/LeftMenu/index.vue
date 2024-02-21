<template>
  <el-menu
    class="h-100-per"
    router
    :default-active="getCurrentRoute()"
    :collapse="isCollapse"
  >
    <sub-menu :items="menuItems"></sub-menu>
  </el-menu>
</template>

<script lang="ts" setup name="left-menu">
import SubMenu from '../SubMenu/index.vue'
import { ref } from 'vue'
import { useRouter, RouteRecordRaw } from 'vue-router'

const router = useRouter()
const menuItems = ref<RouteRecordRaw[]>()

const isCollapse = ref(false)

// 获取当前路由
const getCurrentRoute = () => {
  return router.currentRoute.value.name as string
}

// 获取路由表
const getMenuItems = () => {
  return router.getRoutes().find((item) => item.name === '/pages')?.children
}

menuItems.value = getMenuItems()
</script>

<style lang="scss">
.el-menu-item *,
.el-sub-menu__title * {
  vertical-align: middle;
}
</style>
