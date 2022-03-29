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
import {defineComponent, toRefs, PropType} from "vue"
import type {TableData, Columns, RowSelection} from "./interface"
import BdCheckbox from "@/components/checkbox/src/checkbox.vue"
import {useListSelected} from "./useListSelected"
import {showFocusMask, enterHandler, leaveHandler} from './useTableRowFocus'


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
    const {data, rowSelection} = toRefs(props)
    const {selectedAll, selectAllChange} = useListSelected(data.value, rowSelection.value, emit)

    return {
      selectedAll,
      selectAllChange,
      showFocusMask,
      enterHandler,
      leaveHandler
    }
  }
})
</script>

<style scoped lang="less">
@import "../style/list";
</style>
