<template>
  <div class="dz-input">
    <input
      class="el-input__inner error"
      placeholder="请输入"
      :type="type"
      :value="modelValue"
      :class="inputClass"
      :readonly="readonly"
      :disabled="disabled"
      @input="changeHandler"
      @focus="focusHandler"
      @blur="blurHandler"
    />
    <i v-if="isSearch" class="iconfont icon-icon-test"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue'
import type { PropType } from 'vue'

type InputType = 'text' | 'search'

export default defineComponent({
  name: 'DzInput',
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
    },
    readonly: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    type: {
      type: String as PropType<InputType>,
      default: 'text',
    },
    isError: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, { emit }) {
    const { readonly, disabled, type, isError } = toRefs(props)
    const isSearch = computed(() => type.value === 'search')

    const inputClass = computed(() => [
      disabled.value && 'is-disabled',
      readonly.value && 'is-readonly',
      isError.value && 'is-error',
      isSearch.value && 'is-search',
    ])

    function changeHandler(e: Event): void {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    function focusHandler(e: Event): void {
      emit('focus', e)
    }

    function blurHandler(e: Event): void {
      emit('blur', e)
    }

    return {
      inputClass,
      isSearch,
      changeHandler,
      focusHandler,
      blurHandler,
    }
  },
})
</script>

<style scoped lang="less">
@import '../style/input';
</style>
