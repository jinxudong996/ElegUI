<script setup>
import Button from '@/components/Button/Button.vue'
</script>
<template>
<Button> hello </Button>
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
</template>