import { computed, ref, watchEffect } from 'vue'
import type { RowKey, RowSelection, TableData } from './interface'

export function useSetSelectedProp(rows: TableData, selectedKeys: RowKey[]) {
  watchEffect(() => {
    rows.forEach(row => (row.selected = selectedKeys.includes(row.key)))
  })
}

export function useListSelected(
  data: TableData,
  rowSelection: RowSelection,
  emit: any
) {
  const selectedAll = ref(false)

  const selectedRows = computed(() => data.filter(row => row.selected))

  const selectedRowKeys = computed(() => selectedRows.value.map(row => row.key))

  rowSelection &&
    useSetSelectedProp(data, (rowSelection as RowSelection).selectedRowKeys)

  watchEffect(() => {
    selectedAll.value = data.filter(row => !row.selected).length === 0
  })

  function selectAllChange(val: boolean): void {
    if (val) {
      data.forEach(row => (row.selected = true))
    } else {
      data.forEach(row => (row.selected = false))
    }
    rowSelection?.onChange(selectedRowKeys.value, selectedRows.value)
    emit('selectAllChange', val)
  }

  return {
    selectedAll,
    selectAllChange
  }
}
