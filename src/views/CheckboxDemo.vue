<template>
    <dz-checkbox v-model="checked" label="Hello world"></dz-checkbox>
    <br>
    <dz-checkbox v-model="checked" disabled>Hello world</dz-checkbox>
    <p>选中状态：{{ checked }}</p>
</template>

<script lang="ts">
import DzCheckbox from "../components/checkbox/src/checkbox.vue"
import {ref, defineComponent} from "vue"

export default defineComponent({
    name: "CheckboxDemo",
    components: {DzCheckbox},
    setup() {
        const checked = ref(true)

        return {checked}
    }
})
</script>

<style scoped>

</style>
