<template>
    <bd-checkbox v-model="checked">Hello world!</bd-checkbox>
    <p>{{ checked }}</p>
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
