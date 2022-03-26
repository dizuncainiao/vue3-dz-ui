<template>
    <div class="bd-list">
        表格
    </div>
</template>

<script lang="ts">
import {defineComponent, toRefs, computed, PropType} from "vue"

type Data = Record<string, any>
type TableData = Array<Data>

export default defineComponent({
    name: "BdList",
    props: {
        data: {
            type: Array as PropType<TableData>,
            required: true
        }
    },
    setup(props) {
        const {data} = toRefs(props)
        console.log(data.value);
    }
})
</script>

<style scoped lang="less">
@import "../style/list";
</style>
