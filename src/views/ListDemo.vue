<template>
    <bd-list></bd-list>
</template>

<script lang="ts">
import {ref, defineComponent} from "vue"
import BdList from "../components/list/src/list.vue";

export default defineComponent({
    name: "ListDemo",
    components: {BdList},
    setup() {

    }
})
</script>

<style scoped>

</style>
