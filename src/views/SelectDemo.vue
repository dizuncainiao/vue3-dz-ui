<template>
  <p>展开状态：{{ visible }}</p>
  <dz-select
    v-model="selected"
    :options="options"
    @visible-change="getVisible"
  />
  <p>选中的值：{{ selected }}</p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import type { Options } from '@/components/select/src/interface'
import DzSelect from '@/components/select/src/select.vue'

export default defineComponent({
  name: 'SelectDemo',
  components: { DzSelect },
  setup() {
    const selected = ref('1')

    const options = ref<Options>([
      { value: '1', label: '选项一' },
      { value: '2', label: '选项二' },
      { value: '3', label: '选项三' },
      { value: '4', label: '选项四' },
      { value: '5', label: '选项五' },
      { value: '6', label: '选项六' },
    ])

    const visible = ref(false)

    function getVisible(val: boolean) {
      visible.value = val
    }

    return {
      visible,
      selected,
      options,
      getVisible,
    }
  },
})
</script>

<style scoped></style>
