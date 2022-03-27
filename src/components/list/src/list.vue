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
            <tr v-for="row of data" :key="row.key">
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
</template>

<script lang="ts">
import {defineComponent, toRefs, ref, computed, PropType, watchEffect} from "vue"
import {isEqual} from 'lodash-es'
import type {TableData, Columns, RowSelection} from "./interface"
import BdCheckbox from "@/components/checkbox/src/checkbox.vue"
import {useSetSelectedProp} from "@/components/list/src/listUtil";

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
            type: Object as PropType<RowSelection>
        }
    },
    emits: ['selectAllChange'],
    setup(props, {emit}) {
        const {data, columns, rowSelection} = toRefs(props)

        const allRowKeys = computed(() => data.value.map(item => item.key))

        const selectedRowKeys = ref([])

        const selectedAll = ref(false)

        const selectedRows = computed(() => {
            data.value.filter(row => row.selected)
        })

        useSetSelectedProp(data.value, selectedRowKeys.value)

        watchEffect(() => {
            selectedAll.value = data.value.filter(row => !row.selected).length === 0
        })

        function selectAllChange(val: boolean) {
            if (val) {
                data.value.forEach(row => row.selected = true)
            } else {
                data.value.forEach(row => row.selected = false)
            }
            rowSelection.value?.onChange(selectedRowKeys.value, selectedRows.value)
            emit('selectAllChange', val)
        }

        console.log(allRowKeys);

        return {
            selectedAll,
            selectAllChange
        }
    }
})
</script>

<style scoped lang="less">
@import "../style/list";
</style>
