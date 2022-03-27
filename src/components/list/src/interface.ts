export interface Data {
  key: string | number // 唯一值，Vue 渲染用
  selected?: boolean // 当前行是否选中（PS：组件内用）

  [propName: string]: any
}

export type TableData = Array<Data>

export interface Column {
  title: string // 列名称
  dataIndex: string // 列对应值的 key
  [propName: string]: any
}

export type Columns = Array<Column>

export type RowKey = string | number

export type RowSelection = {
  selectedRowKeys: Array<RowKey>
  onChange(selectedRowKeys: Array<RowKey>, selectedRows: TableData): void
}
