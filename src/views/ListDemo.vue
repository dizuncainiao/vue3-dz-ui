<template>
    <bd-list :data="listData"></bd-list>
</template>

<script lang="ts">
import {reactive, defineComponent, toRefs} from "vue"
import BdList from "../components/list/src/list.vue";

export default defineComponent({
    name: "ListDemo",
    components: {BdList},
    setup() {
        const data = reactive({
            listData: [1, 2, 3]
        })

        return {
            ...toRefs(data)
        }
    }
})
</script>

<style scoped>

</style>
