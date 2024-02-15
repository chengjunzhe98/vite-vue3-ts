<script setup lang="ts" name="CheckSelector">
import { CheckboxValueType } from 'ant-design-vue/es/checkbox/interface'
import { reactive, ref, watch } from 'vue'
import { optionInter } from './type'
const props = defineProps({
  checkboxValueProp: {
    type: Array<CheckboxValueType>,
    required: true,
  },
  optionsProp: {
    type: Array<optionInter>,
    default: [],
  },
  isColumn: {
    type: Boolean,
    default: false,
  },
  needAllCheck: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:checkbox-value-prop'])

const checkboxValue = ref<CheckboxValueType[]>([])
const labelForShow = ref<Array<string | number>>([])

const state = reactive({
  indeterminate: true,
  checkAll: false,
})

// 获取所有选项的值数组
const getAllValueArrow = () => {
  return props.optionsProp.map((el) => {
    return el.value
  })
}

// 点击全选
const onCheckAllChange = (e: any) => {
  if (e.target.checked) {
    checkboxValue.value = getAllValueArrow()
    handleChange(checkboxValue.value)
    Object.assign(state, {
      indeterminate: false,
    })
  } else {
    checkboxValue.value = []
    handleChange(checkboxValue.value)
    Object.assign(state, {
      indeterminate: true,
    })
  }
}

// 选择多选框时
const handleChange = (val: CheckboxValueType[]) => {
  // 调序 正序
  val.sort((a, b) => {
    return (a as number) - (b as number)
  })
  // 清空显示项
  labelForShow.value = []
  // 循环插入显示项
  val.forEach((val) => {
    const { label } = props.optionsProp.find(
      (el) => el.value === val,
    ) as optionInter
    labelForShow.value.push(label)
  })
  emit('update:checkbox-value-prop', checkboxValue.value)
}

// 删除选中项时
const onDeleteItem = (val: any) => {
  const item = props.optionsProp.find((el) => el.label === val) as optionInter
  const i = checkboxValue.value.findIndex((el) => el === item.value)
  checkboxValue.value.splice(i, 1)
  handleChange(checkboxValue.value)
}

// 监听一开始传进来的值
watch(
  () => props.checkboxValueProp,
  (val) => {
    console.log(val)
    checkboxValue.value = val
    handleChange(checkboxValue.value)
  },
  { immediate: true },
)

// 监控全选的值
watch(
  () => checkboxValue.value,
  (val) => {
    state.indeterminate = !!val.length && val.length < props.optionsProp.length
    state.checkAll = val.length === props.optionsProp.length
  },
  { immediate: true },
)
</script>

<template>
  <a-select
    v-model:value="labelForShow"
    mode="multiple"
    style="width: 400px"
    placeholder="Please select"
    allowClear
    @deselect="onDeleteItem"
  >
    <template #dropdownRender>
      <div v-if="needAllCheck">
        <a-checkbox
          v-model:checked="state.checkAll"
          :indeterminate="state.indeterminate"
          @change="onCheckAllChange"
        >
          Check all
        </a-checkbox>
        <a-divider style="margin: 4px" />
      </div>
      <a-checkbox-group
        style="width: 100%"
        @mousedown.prevent
        v-model:value="checkboxValue"
        @change="handleChange"
        :class="[isColumn ? 'checkbox-column' : '']"
      >
        <template v-for="item in optionsProp" :key="item.value">
          <a-checkbox :value="item.value">{{ item.label }}</a-checkbox>
        </template>
      </a-checkbox-group>
    </template>
  </a-select>
</template>

<style scoped lang="scss">
.checkbox-column {
  flex-direction: column;
}
</style>
