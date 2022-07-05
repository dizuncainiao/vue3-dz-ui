<template>
  <div class="pinia-box">
    <h2>Pinia-One</h2>
    {{
      `
    counter: ${counter} ——
    name: ${name} ——
    isAdmin: ${isAdmin} ——
    doubleCounter: ${doubleCounter}`
    }}
    <br />
    <label style="display: inline-flex; align-items: center;"
      >是否是管理员：
      <dz-checkbox v-model="isAdmin" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useStore } from '@/store/useStore'
import DzCheckbox from '@/components/checkbox/src/checkbox.vue'

const store = useStore()
const { counter, name, isAdmin, doubleCounter } = storeToRefs(store)
</script>

<script lang="ts">
export default {
  name: 'PiniaOne'
}
</script>
