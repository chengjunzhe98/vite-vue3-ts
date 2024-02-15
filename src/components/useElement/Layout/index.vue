<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <left-menu></left-menu>
      </el-aside>
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import leftMenu from '../LeftMenu/index.vue'
</script>

<style lang="sass"></style>
