<script setup lang="ts"></script>

<template>
  <div>
    <!-- 测试elementplus -->
    <el-button type="primary">nihao</el-button>

    <!-- 测试svg组件 -->
    <svg-icon name="search" color="red"></svg-icon>

    <!-- 测试antd组件 -->
    <a-card title="Default size card" style="width: 300px">
      <template #extra><a href="#">more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <br />
    <a-card size="small" title="Small size card" style="width: 300px">
      <template #extra><a href="#">more</a></template>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </div>
</template>

<style scoped></style>
