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
import emitter from '@/plugins/emitter'

export default defineComponent({
  name: 'DzOption',
  props: {
    label: {
      type: String as PropType<OptionsItem['label']>,
      default: ''
    },
    value: {
      type: String as PropType<OptionsItem['value']>,
      default: ''
    }
  },
  setup(props) {
    const { label, value } = toRefs(props)
    const { selectHandler, selectedValue } = injectMore([
      'selectHandler',
      'selectedValue'
    ])

    const clickHandler = () => {
      selectHandler.value({
        label: label.value,
        value: value.value
      })
    }

    selectedValue.value === value.value && clickHandler()

    emitter.on('getSelectedValue', value => {
      selectedValue.value = value
    })

    return { clickHandler, selectedValue }
  }
})
</script>
