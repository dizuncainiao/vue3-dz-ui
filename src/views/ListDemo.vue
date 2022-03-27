<template>
    <div class="table-box">
        <bd-list
            :data="listData"
            :columns="columns"
            :rowSelection="{
                selectedRowKeys: selectedRowKeys,
                onChange: onSelectChange
            }"
            @selectAllChange="selectAllChange"
        >
            <template #footer>
                <div class="list-footer">
                    <bd-button type="primary" icon="icon-jiazai_shuaxin">刷新表格</bd-button>
                </div>
            </template>
        </bd-list>
    </div>
</template>

<script lang="ts">
import {reactive, defineComponent, toRefs} from "vue"
import BdList from "../components/list/src/list.vue";
import BdButton from "@/components/button/src/button.vue";

export default defineComponent({
    name: "ListDemo",
    components: {BdButton, BdList},
    setup() {
        const state = reactive({
            listData: [
                {name: '张三', age: 20, gender: '男', key: '1'},
                {name: '张三', age: 20, gender: '男', key: '2'},
                {name: '张三', age: 20, gender: '男', key: '3'},
            ],
            columns: [
                {title: '姓名', dataIndex: 'name'},
                {title: '年龄', dataIndex: 'age'},
                {title: '性别', dataIndex: 'gender'},
            ],
            selectedRowKeys: ['1']
        })

        function onSelectChange(selectedRowKeys: string[], selectedRows: typeof state.listData) {
            console.log(selectedRowKeys, selectedRows);
        }

        return {
            ...toRefs(state),
            onSelectChange,
            selectAllChange: (val: boolean) => {
                console.log('全选状态是：', val)
            }
        }
    }
})
</script>

<style scoped>
.table-box {
    width: 1000px;
    padding: 50px;
    margin: 0 auto;
    background: #f8f7f7;
}

.list-footer {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 20px;
}
</style>
