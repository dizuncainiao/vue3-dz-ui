<template>
    <label class="bd-checkbox" :class="modelValue && 'is-checked'">
        <span class="bd-checkbox__input">
            <span class="bd-checkbox__inner"></span>
            <input :checked="modelValue" @change="changeHandler" class="bd-checkbox__original" type="checkbox">
        </span>
        <span v-if="$slots.default || label" class="bd-checkbox__label">
            <slot></slot>
            <template v-if="$slots.default">{{ label }}</template>
        </span>
    </label>
</template>

<script lang="ts">
import {defineComponent, toRefs, PropType} from "vue"

export default defineComponent({
    name: "BdCheckbox",
    props: {
        label: {
            type: String as PropType<string>
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const {modelValue} = toRefs(props)

        function changeHandler(e: InputEvent) {
            const {target: {checked}} = e
            emit('update:modelValue', checked)
        }

        return {
            changeHandler
        }
    }
})
</script>

<style scoped lang="less">
@import "../style/checkbox";
</style>
