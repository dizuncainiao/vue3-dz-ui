<template>
  <div class="dz-select" @click.stop="showDropdown">
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
    <transition name="zoom-in-top">
      <div v-show="visible" class="dz-select-dropdown">
        <ul class="dz-select-dropdown-list">
          <li>选项一</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  toRefs,
  watch,
  onMounted,
  onBeforeUnmount,
} from 'vue'
import type { PropType } from 'vue'
import { addEvent, removeEvent } from '@/utils'
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
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'visible-change'],
  setup(props, { emit }) {
    const state = reactive({
      value: '',
      visible: false,
    })
    const input = ref(null)
    const hiddenDropdown = () => (state.visible = false)

    onMounted(() => addEvent(document, 'click', hiddenDropdown))

    onBeforeUnmount(() => removeEvent(document, 'click', hiddenDropdown))

    watch(
      () => state.visible,
      (visible) => {
        emit('visible-change', visible)
        ;(input.value as any).setRotate(state.visible)
      }
    )

    function showDropdown() {
      state.visible = !state.visible
    }

    function focusHandler(e: Event) {
      emit('focus', e)
    }

    function blurHandler(e: Event) {
      emit('blur', e)
    }

    return {
      ...toRefs(state),
      input,
      blurHandler,
      focusHandler,
      showDropdown,
    }
  },
})
</script>

<style lang="less">
@import '../style/select.less';
</style>
