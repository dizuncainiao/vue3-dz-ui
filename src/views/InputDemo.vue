<template>
  <p>msg 的值：{{ msg }}</p>
  <div>
    搜索框：
    <dz-input v-model="msg" type="search"></dz-input>
  </div>
  <hr>
  <div>
    普通框：
    <dz-input v-model="msg"></dz-input>
  </div>
  <hr>
  <div>
    禁用框：
    <dz-input v-model="msg" disabled></dz-input>
  </div>
  <hr>
  <div>
    报错框：
    <dz-input v-model="msg" is-error></dz-input>
  </div>
</template>

<script lang="ts">
import {ref, defineComponent, onMounted} from 'vue'
import DzInput from "@/components/input/src/input.vue";

export default defineComponent({
  name: 'InputDemo',
  components: {DzInput},
  setup() {
    const msg = ref('Hello world!')

    return {msg}
  },
})
</script>

<style scoped></style>
