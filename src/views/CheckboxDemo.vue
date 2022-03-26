<template>
    <bd-checkbox v-model="checked" label="Hello world"></bd-checkbox>
    <br>
    <bd-checkbox v-model="checked" disabled>Hello world</bd-checkbox>
    <p>选中状态：{{ checked }}</p>
</template>

<script lang="ts">
import BdCheckbox from "../components/checkbox/src/checkbox.vue"
import {ref} from "vue"

export default {
    name: "ListDemo",
    components: {BdCheckbox},
    setup() {
        const checked = ref(true)

        return {checked}
    }
}
</script>

<style scoped>

</style>
