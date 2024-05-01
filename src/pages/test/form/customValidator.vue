<template>
  <a-form :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Activity userName" v-bind="validateInfos.userName">
      <a-input v-model:value="modelRef.userName" />
    </a-form-item>
    <a-form-item label="Activity zone" v-bind="validateInfos.region">
      <a-select v-model:value="modelRef.region" placeholder="please select your zone">
        <a-select-option value="shanghai">Zone one</a-select-option>
        <a-select-option value="beijing">Zone two</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="Activity check" v-bind="validateInfos.check">
      <a-checkbox v-model:checked="modelRef.a" name="check">Online</a-checkbox>
      <a-checkbox v-model:checked="modelRef.b" name="check">
        Promotion
      </a-checkbox>
      <a-checkbox v-model:checked="modelRef.c" name="check">Offline</a-checkbox>
    </a-form-item>
    <a-form-item label="Activity resource" v-bind="validateInfos.resource">
      <a-radio-group v-model:value="modelRef.resource">
        <a-radio value="1">Sponsor</a-radio>
        <a-radio value="2">Venue</a-radio>
      </a-radio-group>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click.prevent="onSubmit">Create</a-button>
      <a-button style="margin-left: 10px" @click="resetFields">Reset</a-button>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
/*
============ import ============
*/
import { reactive, toRaw, watch } from 'vue'
import { Form } from 'ant-design-vue'
import { rulesRefItf } from './type'
/*
============ import ============
*/


/*
============ const ============
*/
// 定义表单功能
const useForm = Form.useForm
// 表单布局
const labelCol = { span: 4 }
const wrapperCol = { span: 14 }
// 表单对象
const modelRef = reactive({
  userName: '',
  region: undefined,
  check: '',
  a: false,
  b: false,
  c: false,
  resource: '1',
})

// 校验规则
const rulesRef = reactive<rulesRefItf>({
  userName: [
    {
      required: true,
      message: 'Please input userName',
    },
  ],
  region: [
    {
      required: true,
      message: 'Please select region',
    },
  ],
  check: [
    {
      required: true,
      validator: customValidator,
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select region',
    },
  ],
})
/*
============ const ============
*/


/*
============ use ============
*/
// 使用useform
const { resetFields, validate, validateInfos } = useForm(modelRef, rulesRef, {
  onValidate: (...args) => console.log(...args),
})
/*
============ use ============
*/


/*
============ watch ============
*/
// 监控控制userName是否必填
watch(
  () => modelRef.resource,
  (nVal) => {
    console.log(nVal)
    if (nVal === '1') {
      rulesRef.userName[0].required = false
    } else {
      rulesRef.userName[0].required = true
    }
  },
  { immediate: true },
)
/*
============ watch ============
*/


/*
============ function ============
*/
// 自定义校验函数
async function customValidator() {
  const { a, b, c } = toRaw(modelRef)
  const i = [a, b, c].findIndex((el) => el === true)
  if (i >= 0) {
    return Promise.resolve()
  } else {
    return Promise.reject('至少要选一个吧')
  }
}

// 提交
async function onSubmit() {
  try {
    await validate()
    console.log(toRaw(modelRef))
  } catch (error) {
    console.log('error', error)
  }
}
/*
============ function ============
*/
</script>
