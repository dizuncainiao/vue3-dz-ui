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
      @keydown.enter="query"
    />
    <div class="suffix" @click="query">
      <i v-if="isSearch" class="iconfont icon-icon-test"></i>
      <slot v-else name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onMounted, computed } from 'vue'
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
  setup(props, { emit, slots }) {
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
      emit('change', e)
    }

    function query() {
      emit('change', props.modelValue)
    }

    return {
      inputClass,
      isSearch,
      changeHandler,
      focusHandler,
      blurHandler,
      query,
    }
  },
})
</script>

<style scoped lang="less">
@import '../style/input';
</style>
