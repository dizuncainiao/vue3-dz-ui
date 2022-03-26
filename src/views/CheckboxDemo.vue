<template>
    <bd-checkbox v-model="checked" label="Hello world"></bd-checkbox>
    <br>
    <bd-checkbox v-model="checked" disabled>Hello world</bd-checkbox>
    <p>选中状态：{{ checked }}</p>
</template>

<script lang="ts">
import BdCheckbox from "../components/checkbox/src/checkbox.vue"
import {ref, defineComponent} from "vue"

export default defineComponent({
    name: "CheckboxDemo",
    components: {BdCheckbox},
    setup() {
        const checked = ref(true)

        return {checked}
    }
})
</script>

<style scoped>

</style>
