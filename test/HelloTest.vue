<script setup lang="ts">
import { computed, ref } from 'vue'
import DzButton from '../src/components/button/src/button.vue'

const props = defineProps<{ count: number }>()

const times = ref(2)
const result = computed(() => props.count * times.value)

defineExpose(props)
</script>

<template>
  <div>{{ count }} x {{ times }} = {{ result }}</div>
  <dz-button type="default" @click="times += 1">times: {{ times }}</dz-button>
</template>
