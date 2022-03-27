import {RowKey, TableData} from './interface'
import {watchEffect} from "vue"

export function useSetSelectedProp(rows: TableData, selectedKeys: RowKey[]) {
  watchEffect(() => {
    rows.forEach(row => row.selected = selectedKeys.includes(row.key))
  })
  console.log(rows, 'line 8');
}
