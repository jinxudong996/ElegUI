<template>
  <div
    class="vk-collapse"
  >
    <slot/>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch ,onMounted} from 'vue'
import type { NameType, CollapseProps, CollapseEmits } from './types'
import { collapseContextKey } from './types'
defineOptions({
  name: 'VkCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue)
console.log(111,activeNames)
watch(() => props.modelValue, () => {
  console.log(props.modelValue)
  activeNames.value = props.modelValue
})
if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one acitve item')
}
const handleItemClick = (item: NameType) => {
  let _activeNames = [...activeNames.value ]
  if (props.accordion) {
    _activeNames = [ activeNames.value[0] === item ? '' : item ]
    activeNames.value = _activeNames
  } else {
    const index = _activeNames.indexOf(item)
    if (index > -1) {
      // 存在，删除数组对应的一项
      _activeNames.splice(index, 1)
    } else {
      // 不存在，插入对应的name
      _activeNames.push(item)
    }
    activeNames.value = _activeNames
  }
  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
onMounted(() => {
  console.log('Providing collapseContext', { activeNames, handleItemClick });
});
</script>
