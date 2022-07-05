<template>
  <div class="pinia-box">
    <h2>Test-Pinia</h2>
    {{
      `
    counter: ${counter} ——
    name: ${name} ——
    isAdmin: ${isAdmin} ——
    doubleCounter: ${doubleCounter}`
    }}
    <br />
    <dz-button @click="counter++">counter++</dz-button>
  </div>
  <pinia-one />
  <pinia-two />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStore } from '@/store/useStore'
import PiniaOne from '@/views/pinia-demo/PiniaOne.vue'
import PiniaTwo from '@/views/pinia-demo/PiniaTwo.vue'
import DzButton from '@/components/button/src/button.vue'

const store = useStore()
const { counter, name, isAdmin, doubleCounter } = storeToRefs(store)

console.log(store)
</script>

<script lang="ts">
export default {
  name: 'TestPinia'
}
</script>

<style lang="less">
.pinia-box {
  padding: 20px;
  margin: 20px;
  border: 2px dashed lightpink;
}
</style>
