<template>
  <div class="dz-input">
    <input
      ref="input"
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
    <div :class="suffixClass" @click="query">
      <i v-if="isSearch" class="iconfont icon-icon-test"></i>
      <slot v-else name="suffix"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, toRefs } from 'vue'
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
    // 是否用在 Select 组件中
    isSelect: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur'],
  setup(props, { emit, expose, slots }) {
    const { readonly, disabled, type, isError, isSelect } = toRefs(props)
    const isSearch = computed(() => type.value === 'search')
    const input = ref<null | HTMLInputElement>(null)
    const hasRotate = ref(false)

    const inputClass = computed(() => [
      disabled.value && 'is-disabled',
      readonly.value && 'is-readonly',
      isError.value && 'is-error',
      isSearch.value && 'is-suffix',
      isSelect.value && 'is-select',
      slots.suffix && 'is-suffix',
    ])

    const suffixClass = computed(() => [
      'suffix',
      isSelect.value && 'no-event',
      hasRotate.value && 'rotate',
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
      if (isSelect.value) {
        ;(input.value as HTMLInputElement).focus()
      } else {
        emit('change', props.modelValue)
      }
    }

    function setRotate(value: boolean) {
      hasRotate.value = value
    }

    expose({ setRotate })

    return {
      input,
      inputClass,
      suffixClass,
      isSearch,
      changeHandler,
      focusHandler,
      blurHandler,
      query,
    }
  },
})
</script>

<style lang="less">
@import '../style/input';
</style>
