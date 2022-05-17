<template>
  <button :class="buttonClass" :disabled="isDisabled">
    <slot></slot>
    <slot name="icon"> </slot>
    <i v-if="showPropIcon" :class="iconClass"></i>
  </button>
</template>

<script lang="ts">
import { defineComponent, toRefs, ref, computed } from 'vue'
import type { PropType } from 'vue'
import type {
  ButtonSize,
  ButtonType,
  IconType,
} from '@/components/button/src/interface'
// import {ComponentOptionsBase} from "@vue/runtime-core"

export default defineComponent({
  name: 'DzButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      required: true,
    },
    disabled: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    round: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    icon: {
      type: String as PropType<IconType>,
      // required: true
    },
    size: {
      type: String as PropType<ButtonSize>,
      default: 'default',
    },
  },
  setup(props, { slots }) {
    const { icon } = toRefs(props)
    const buttonClass = computed(() => [
      'dz-button',
      `dz-button-${props.type}`,
      props.disabled && 'dz-button-disabled',
      props.round && 'dz-button-round',
      props.size && `dz-button-size-${props.size}`,
    ])
    const isDisabled = ref(props.disabled)
    const showPropIcon = computed(() => !slots.icon && props.icon)
    const iconClass = computed(() => [
      'iconfont',
      showPropIcon.value && icon.value,
    ])

    return {
      iconClass,
      showPropIcon,
      buttonClass,
      isDisabled,
    }
  },
})
</script>

<style lang="less">
@import '../style/button';
</style>
