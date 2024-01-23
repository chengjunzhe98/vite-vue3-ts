<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->
<!-- 单独引入antd使用示例 -->

<script setup lang="ts">
import { Select, CheckboxGroup, Checkbox, Row, Col } from 'ant-design-vue'
import { CheckboxValueType } from 'ant-design-vue/es/checkbox/interface'
import { ref } from 'vue'

const ASelect = Select
const ACheckboxGroup = CheckboxGroup
const ACheckbox = Checkbox
const ARow = Row
const ACol = Col

const value = ref<Array<string>>([])

const options = [...Array(25)].map((_, i) => ({
  value: (i + 10).toString(36) + (i + 1),
  label: (i + 10).toString(36) + (i + 1),
}))

const handleChange = (value: CheckboxValueType[]) => {
  console.log(`selected ${value}`)
}
</script>

<template>
  <a-select
    v-model:value="value"
    mode="multiple"
    style="width: 400px"
    placeholder="Please select"
    allowClear
  >
    <template #dropdownRender>
      <a-checkbox-group
        style="width: 100%"
        @mousedown.prevent
        v-model:value="value"
        @change="handleChange"
      >
        <a-row
          class="row-style-for-checkbox"
          v-for="item in options"
          :key="item.value"
        >
          <a-col :span="24">
            <a-checkbox :value="item.value">{{ item.label }}</a-checkbox>
          </a-col>
        </a-row>
      </a-checkbox-group>
    </template>
  </a-select>
</template>

<style scoped>
.row-style-for-checkbox {
  min-width: 60px;
}
</style>
