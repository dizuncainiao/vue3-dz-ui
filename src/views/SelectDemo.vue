<template>
  <dz-select @visible-change="getVisible"></dz-select>
  <p>选中状态：{{ selected }}</p>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import DzSelect from '@/components/select/src/select.vue'

export default defineComponent({
  name: 'SelectDemo',
  components: { DzSelect },
  setup() {
    const selected = ref('')

    function getVisible(val: any) {
      console.log('visible', val)
    }

    return {
      selected,
      getVisible,
    }
  },
})
</script>

<style scoped></style>
