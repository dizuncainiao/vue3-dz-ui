<template>
  <component :is="components[0]"/>
</template>

<script setup lang="ts">
import ButtonDemo from '@/views/ButtonDemo.vue'
const components = [ButtonDemo]
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
