<template>
  <div class="bd-list">
    <table>
      <thead>
      <tr>
        <th v-if="rowSelection">
          <bd-checkbox v-model="selectedAll" @change="selectAllChange"></bd-checkbox>
        </th>
        <th v-for="(col, index) of columns" :key="index">
          {{ col.title }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="row of data"
          :key="row.key"
          @mouseenter="enterHandler"
          @mouseleave="leaveHandler"
      >
        <td v-if="rowSelection">
          <bd-checkbox v-model="row.selected"></bd-checkbox>
        </td>
        <td v-for="(col, index) of columns" :key="index">
          {{ row[col.dataIndex] }}
        </td>
      </tr>
      </tbody>
    </table>
    <div class="list-footer">
      <slot name="footer">
      </slot>
    </div>
  </div>

  <teleport to="body">
    <transition name="slide-fade">
      <div v-if="showFocusMask" class="tr-focus-mask"/>
    </transition>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, toRefs, ref, PropType} from "vue"
import type {TableData, Columns, RowSelection} from "./interface"
import BdCheckbox from "@/components/checkbox/src/checkbox.vue"
import {useListSelected} from "@/components/list/src/useListSelected";

export default defineComponent({
  name: "BdList",
  components: {BdCheckbox},
  props: {
    data: {
      type: Array as PropType<TableData>,
      required: true
    },
    columns: {
      type: Array as PropType<Columns>,
      required: true
    },
    rowSelection: {
      type: Object as PropType<RowSelection>,
      default: () => ({})
    }
  },
  emits: ['selectAllChange'],
  setup(props, {emit}) {
    const {data, columns, rowSelection} = toRefs(props)
    const {selectedAll, selectAllChange} = useListSelected(data.value, rowSelection.value, emit)

    const focusTime = ref(0)
    const showFocusMask = ref(false)
    let timer: number | null = null
    const FOCUS_TIME = 2

    function enterHandler(e: MouseEvent) {
      timer = window.setInterval(() => {
        focusTime.value++
        console.log(focusTime.value);
        if (focusTime.value === FOCUS_TIME) {
          clearInterval(timer as number);
          (e.target as HTMLTableRowElement).classList.add('focused')
          showFocusMask.value = true
          console.log(focusTime.value, '添加 class');
        }
      }, 1000)
    }

    function leaveHandler(e: MouseEvent) {
      clearInterval(timer as number);
      (e.target as HTMLTableRowElement).classList.remove('focused')
      showFocusMask.value = false
      focusTime.value = 0
      console.log(focusTime.value);
    }

    return {
      showFocusMask,
      selectedAll,
      selectAllChange,
      enterHandler,
      leaveHandler
    }
  }
})
</script>

<style scoped lang="less">
@import "../style/list";
</style>
