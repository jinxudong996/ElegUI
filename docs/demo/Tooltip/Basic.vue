<script setup>
import Tooltip from '@/components/Tooltip/Tooltip.vue'
import Button from '@/components/Button/Button.vue'
</script>
<template>
  <Tooltip 
    content="hello tooltip"
    placement="top-start"
  >
    <Button> top-start </Button>
  </Tooltip>

  <Tooltip 
    content="hello tooltip"
    placement="bottom-start"
  >
    <Button> bottom-start </Button>
  </Tooltip>

  <Tooltip 
    content="hello tooltip"
    placement="left-start"
  >
    <Button> left-start </Button>
  </Tooltip>

  <Tooltip 
    content="hello tooltip"
    placement="right-start"
  >
    <Button> right-start </Button>
  </Tooltip>
</template>