<template>
  <template v-for="item in items">
    <el-sub-menu v-if="item?.children?.length" :index="item.name">
      <template #title>
        <span class="material-symbols-outlined">
          {{ item?.meta?.iconName }}
        </span>
        <span>{{ item?.meta?.menuName }}</span>
      </template>
      <sub-menu v-if="item?.children?.length" :items="item?.children"></sub-menu>
    </el-sub-menu>
    <el-menu-item v-else :index="item.name as string">
      <span class="material-symbols-outlined">
        {{ item?.meta?.iconName }}
      </span>
      <template #title>{{ item?.meta?.menuName }}</template>
    </el-menu-item>
  </template>
</template>

<script lang="ts" setup name="sub-menu">
import SubMenu from './index.vue'
defineProps(['items'])
</script>
