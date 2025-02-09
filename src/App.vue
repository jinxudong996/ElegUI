<script setup lang="ts">
import {ref, onMounted} from "vue"
import type {ButtonInstance} from "./components/Button/types"
import Button from "./components/Button/Button.vue"
import Collapse from "./components/Collapse/Collapse.vue"
import Item from "./components/Collapse/CollapseItem.vue"
import Icon from './components/Icon/Icon.vue'

const buttonRef = ref<ButtonInstance | null>(null)
  const size = ref<any>('2x')
onMounted(() => {
  console.log(321321123,buttonRef.value)
  if(buttonRef.value){
    console.log(123121233,buttonRef.value.ref)
  }
  setTimeout(() => {
    openedValue.value = ['a', 'b']
  }, 2000)
})
const openedValue = ref(['a'])
</script>

<template>
  <header>
    <Icon icon="arrow-up" :size="size" type="danger" color="#409eff"/>
    <Button ref="buttonRef" >Test Button</Button>
    <Button plain >Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br/><br/>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button> 
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br/><br/>   
    <Collapse v-model="openedValue">
      <Item name="aa" #title disabled>
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
    {{openedValue}}
  </header>
  
  
</template>


