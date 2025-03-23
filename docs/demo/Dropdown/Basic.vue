<script setup>
import { h } from 'vue'
import Dropdown from '@/components/Dropdown/Dropdown.vue'
import Button from '@/components/Button/Button.vue'
const options = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', },
  { key: 3, label: 'item3',  },
  { key: 4, label: 'item4' }
]
</script>
<template>
<div class="basic block">
  <Dropdown 
    placement="bottom-start" 
    :menu-options="options"
  >
  <Button type="primary"> Hover 下拉菜单 </Button>
  </Dropdown>
</div>
</template>
<style>
.vp-doc .vitepress-demo-preview-preview ul, .vp-doc .vitepress-demo-preview-preview  ol {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>