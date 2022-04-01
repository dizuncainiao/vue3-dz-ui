<template>
  <div class="dz-select"></div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'DzCheckbox',
  props: {
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {},
})
</script>

<style scoped lang="less">
@import '../style/select';
</style>
