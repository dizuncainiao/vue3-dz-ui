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
          <li
            v-for="(item, index) of $props.options"
            :key="index"
            :class="item.label === value && 'selected'"
            @click="selectHandler(item)"
          >
            {{ item.label }}
          </li>
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
import { getLabel } from './interface'
import type { OptionsItem, Options } from './interface'
import type { PropType } from 'vue'
import { addEvent, removeEvent } from '@/utils'
import DzInput from '@/components/input/src/input.vue'

export default defineComponent({
  name: 'DzSelect',
  components: { DzInput },
  props: {
    modelValue: {
      type: String as PropType<string>,
      default: '',
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    options: {
      type: Array as PropType<Options>,
      default: () => [],
    },
  },
  emits: ['update:modelValue', 'change', 'focus', 'blur', 'visible-change'],
  setup(props, { emit }) {
    const state = reactive({
      value: getLabel(props.options, props.modelValue) || '',
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

    function selectHandler(item: OptionsItem) {
      state.value = item.label
      emit('update:modelValue', item.value)
    }

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
      selectHandler,
    }
  },
})
</script>

<style lang="less">
@import '../style/select.less';
</style>
