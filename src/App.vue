<script setup lang="ts">
import { createVNode, ref } from 'vue'
import { Modal } from 'ant-design-vue'
import CheckSelector from '@/components/CheckSelector/index.vue'
import { optionInter } from './components/CheckSelector/type'
import { CheckboxValueType } from 'ant-design-vue/es/checkbox/interface'
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

const checkboxValue = ref<CheckboxValueType[]>([])

const options: Array<optionInter> = [
  {
    value: 1,
    label: '1-label',
  },
  {
    value: 2,
    label: '2-label',
  },
  {
    value: 3,
    label: '3-label',
  },
  {
    value: 4,
    label: '4-label',
  },
]

setTimeout(() => {
  checkboxValue.value = [1, 2]
}, 9000)
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

    <check-selector
      v-model:checkbox-value-prop="checkboxValue"
      :options-prop="options"
    ></check-selector>
  </div>
</template>

<style scoped></style>
