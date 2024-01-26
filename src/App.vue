<script setup lang="ts">
import { createVNode } from 'vue'
import { Modal } from 'ant-design-vue'
const showConfirm = () => {
  Modal.confirm({
    title: 'Do you Want to delete these items?',
    content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
    onOk() {
      console.log('OK')
    },
    onCancel() {
      console.log('Cancel')
      return new Promise((res) => {
        setTimeout(() => {
          res(2)
          console.log(1)
        }, 2000)
      }).then((res) => {
        console.log(res)
      })
    },
  })
}
</script>

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

    <a-button @click="showConfirm">Confirm</a-button>
  </div>
</template>

<style scoped></style>
