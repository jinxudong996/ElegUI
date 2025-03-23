<script setup>
import {ref} from 'vue'
import Collapse from '@/components/Collapse/Collapse.vue'
import Item from '@/components/Collapse/CollapseItem.vue'
const openedValue = ref(['a','b'])
</script>

<template>
  <Collapse v-model="openedValue">
    <Item name="aa"  #title disabled>
      <h1>我是大标题</h1>
    </Item>
    <Item name="a" title="Title A">
      <h1>headline title</h1>
      <div> this is content a aaa </div>
    </Item>
    <Item name="b" title="Title B">
      <div> this is bbbbb test </div>
    </Item>
    <Item name="c" title="Disabled Title">
      <div> this is cccc test </div>
    </Item>
  </Collapse>
</template>
