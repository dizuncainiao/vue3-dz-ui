<template>
  <label class="dz-checkbox" :class="checkboxClass">
    <span class="dz-checkbox__input">
      <span class="dz-checkbox__inner iconfont icon-duihao"></span>
      <input
        :checked="modelValue"
        :disabled="disabled"
        class="dz-checkbox__original"
        type="checkbox"
        @change="changeHandler"
      />
    </span>
    <span v-if="$slots.default || label" class="dz-checkbox__label">
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
      type: String as PropType<string>,
    },
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
  setup(props, { emit }) {
    const { modelValue, disabled } = toRefs(props)

    const checkboxClass = computed(() => [
      modelValue.value && 'is-checked',
      disabled.value && 'is-disabled',
    ])

    function changeHandler(e: Event) {
      emit('update:modelValue', (e.target as HTMLInputElement).checked)
      emit('change', (e.target as HTMLInputElement).checked)
    }

    return {
      changeHandler,
      checkboxClass,
    }
  },
})
</script>

<style scoped lang="less">
@import '../style/checkbox';
</style>
