<template>
  <div class="dz-select">
    <dz-input
      ref="input"
      v-model="value"
      readonly
      is-select
      @focus="focusHandler"
      @blur="blurHandler"
    >
      <template #suffix>
        <i class="iconfont icon-xiajiantou"></i>
      </template>
    </dz-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue'
import type { PropType } from 'vue'
import DzInput from '@/components/input/src/input.vue'

export default defineComponent({
  name: 'DzSelect',
  components: { DzInput },
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
  emits: ['update:modelValue', 'change', 'visible-change'],
  setup(props, { emit }) {
    const state = reactive({
      value: '',
      visible: false,
    })
    const input = ref(null)

    function focusHandler() {
      ;(input.value as any).setRotate(true)
      emit('visible-change', (state.visible = true))
    }

    function blurHandler() {
      ;(input.value as any).setRotate(false)
      emit('visible-change', (state.visible = false))
    }

    return {
      ...toRefs(state),
      input,
      blurHandler,
      focusHandler,
    }
  },
})
</script>

<style lang="less">
@import '../style/select';
</style>
