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
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
    </div>
    <Button type="primary" plain disabled ref="buttonRef"> Test button</Button>
  </header>

  
</template>


