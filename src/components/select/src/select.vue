<template>
  <div class="dz-select">
    <dz-input v-model="value" readonly type="search" @blur="blurHandler" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
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
  emits: ['update:modelValue', 'change'],
  setup() {
    const state = reactive({
      value: '',
    })

    function blurHandler(e: any) {
      console.log(e)
    }

    return {
      ...toRefs(state),
      blurHandler,
    }
  },
})
</script>

<style scoped lang="less">
@import '../style/select';
</style>
