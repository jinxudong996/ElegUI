<script setup lang="ts">
import {ref, onMounted} from "vue"
import type {ButtonInstance} from "./components/Button/types"
import Button from "./components/Button/Button.vue"


const buttonRef = ref<ButtonInstance | null>(null)
onMounted(() => {
  console.log(321321123,buttonRef.value)
  if(buttonRef.value){
    console.log(123121233,buttonRef.value.ref)
  }
  
})
</script>

<template>
  <header>
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
  </header>

  
</template>


