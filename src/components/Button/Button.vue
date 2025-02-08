<template>
  <button
    ref="_ref"
    class="vk-button"
    :class="{
      [`vk-button--${type}`]: type,
      [`vk-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <span>
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import type { ButtonProps } from './types'
import type { ButtonInstance } from './types'

// 使用 withDefaults 定义带有默认值的 props
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button'
})


defineOptions({
  name: 'VkButton',
  inheritAttrs: false,
})

const _ref = ref<HTMLButtonElement>()

defineExpose({
  ref: _ref
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* 样式内容 */

</style>