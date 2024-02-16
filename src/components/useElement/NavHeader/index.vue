<template>
  <el-header class="nav-header-bg">
    <el-row justify="space-between" align="middle" class="h-100-per">
      <el-row>
        <span class="f700">CHENGJUZNE</span>
        <el-divider direction="vertical" />
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :key="item.path" v-for="item in breadItems" :to="{ path: item.path }">{{ item.name
          }}
          </el-breadcrumb-item>
          <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </el-row>
      <el-dropdown>
        <span class="el-dropdown-link">
          Dropdown List
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-row>
  </el-header>
</template>

<script lang="ts" setup name="nav-header">
import { ArrowDown } from '@element-plus/icons-vue'
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';
import { cjzBreadItemsItf } from './type';

const route = useRoute();

const breadItems = ref<Array<cjzBreadItemsItf>>([])

// 生成面包屑需要的数据
const creatBreadItems = () => {
  const initArray: Array<cjzBreadItemsItf> = [{ name: 'home', path: '/' }]

  const needAddItem: Array<cjzBreadItemsItf> = route.matched.map(el => {
    return {
      name: el.meta.menuName,
      path: el.name
    } as cjzBreadItemsItf
  })

  needAddItem.shift()

  if (needAddItem[0].name === "home") {
    needAddItem.shift()
  }

  return Array.prototype.concat(needAddItem, initArray) as Array<cjzBreadItemsItf>
}

// 监控路由路径变化===>>生成当前的面包屑
watch(() => route.matched, () => {
  breadItems.value = creatBreadItems()
}, { immediate: true })


</script>

<style lang="scss">
.nav-header-bg {
  background-image: radial-gradient(#00000010 1px, $base-color 1px);
  background-size: 6px 4px;
  backdrop-filter: saturate(50%) blur(4px);
  height: $header-height;
  border-bottom: 1px solid $border-color;
}
</style>