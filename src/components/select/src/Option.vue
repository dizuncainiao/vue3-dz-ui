<template>
  <li
    :class="[$props.value === selectedValue && 'selected', 'dz-select-option']"
    @click="clickHandler"
  >
    {{ $props.label }}
  </li>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import type { PropType } from 'vue'
import type { OptionsItem } from './interface'
import { injectMore } from '@/utils'

export default defineComponent({
  name: 'DzOption',
  props: {
    label: {
      type: String as PropType<OptionsItem['label']>,
      default: '',
    },
    value: {
      type: String as PropType<OptionsItem['value']>,
      default: '',
    },
  },
  setup(props) {
    const { label, value } = toRefs(props)
    const { selectHandler, selectedValue } = injectMore([
      'selectHandler',
      'selectedValue',
    ])

    if (selectedValue.value === value.value) {
      selectHandler.value({
        label: label.value,
        value: value.value,
      })

      console.log(
        `label:${label.value}`,
        `value:${value.value}`,
        `selectedValue:${selectedValue.value}`,
        'line 333'
      )
    }
    const clickHandler = () => {
      console.log(
        `label:${label.value}`,
        `value:${value.value}`,
        `selectedValue:${selectedValue.value}`,
        'line 333'
      )
      selectHandler.value({
        label: label.value,
        value: value.value,
      })
    }

    return { clickHandler, selectedValue }
  },
})
</script>

<style scoped></style>
