<template>
  <el-menu
    class="h-100-per"
    router
    default-active="/pages/home"
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

const getMenuItems = () => {
  return router.getRoutes().find((item) => item.name === '/pages')?.children
}

menuItems.value = getMenuItems()
console.log(1)
</script>

<style lang="scss">
.el-menu-item *,
.el-sub-menu__title * {
  vertical-align: middle;
}
</style>
