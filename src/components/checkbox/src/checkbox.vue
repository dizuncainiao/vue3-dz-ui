<template>
  <label class="dz-checkbox" :class="checkboxClass">
    <span class="dz-checkbox-input">
      <span class="dz-checkbox-inner iconfont icon-duihao"></span>
      <input
        :checked="modelValue"
        :disabled="disabled"
        class="dz-checkbox-original"
        type="checkbox"
        @change="changeHandler"
      />
    </span>
    <span v-if="$slots.default || label" class="dz-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'
import type { PropType } from 'vue'

export default defineComponent({
  name: 'DzCheckbox',
  props: {
    label: {
      type: String as PropType<string>
    },
    modelValue: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false
    }
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const { modelValue, disabled } = toRefs(props)

    const checkboxClass = computed(() => [
      modelValue.value && 'is-checked',
      disabled.value && 'is-disabled'
    ])

    function changeHandler(e: Event) {
      emit('update:modelValue', (e.target as HTMLInputElement).checked)
      emit('change', (e.target as HTMLInputElement).checked)
    }

    return {
      changeHandler,
      checkboxClass
    }
  }
})
</script>

<style lang="less">
@import "../style/checkbox";
</style>
