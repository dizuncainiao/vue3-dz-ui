<template>
  <div class="dz-input">
    <input
        class="el-input__inner error"
        :type="type"
        placeholder="请输入"
        :value="modelValue"
        :class="inputClass"
        :readonly="readonly"
        :disabled="disabled"
        @input="changeHandler"
        @focus="focusHandler"
        @blur="blurHandler"
    >
    <i v-if="isSearch" class="iconfont icon-icon-test"></i>
  </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, computed, ref} from 'vue'
import type {PropType} from 'vue'

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
      default: 'text'
    }
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, {emit, expose}) {
    const {readonly, disabled, type} = toRefs(props)
    const isError = ref(false)
    const isSearch = computed(() => type.value === 'search')

    const inputClass = computed(() => [
      (readonly?.value || disabled?.value) && 'is-disabled',
      isError.value && 'is-error',
      isSearch.value && 'is-search'
    ])

    function changeHandler(e: KeyboardEvent) {
      emit('update:modelValue', (e.target as HTMLInputElement).value)
    }

    function focusHandler(e: KeyboardEvent) {
      emit('focus', e)
    }

    function blurHandler(e: KeyboardEvent) {
      emit('blur', e)
    }

    document.body.onkeydown

    return {
      inputClass,
      isSearch,
      changeHandler,
      focusHandler,
      blurHandler
    }
  },
})
</script>

<style scoped lang="less">
@import '../style/input';
</style>
