<template>
    <label class="bd-checkbox" :class="checkboxClass">
        <span class="bd-checkbox__input">
            <span class="bd-checkbox__inner iconfont icon-duihao"></span>
            <input :checked="modelValue" :disabled="disabled" @change="changeHandler" class="bd-checkbox__original"
                   type="checkbox">
        </span>
        <span v-if="$slots.default || label" class="bd-checkbox__label">
            <slot></slot>
            <template v-if="!$slots.default">{{ label }}</template>
        </span>
    </label>
</template>

<script lang="ts">
import {defineComponent, toRefs, PropType, computed} from "vue"

export default defineComponent({
    name: "BdCheckbox",
    props: {
        label: {
            type: String as PropType<string>
        },
        modelValue: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    emits: ['update:modelValue', 'change'],
    setup(props, {emit}) {
        const {modelValue, disabled} = toRefs(props)

        const checkboxClass = computed(() => [
            modelValue.value && 'is-checked',
            disabled.value && 'is-disabled',
        ])

        function changeHandler(e: Event) {
            emit('update:modelValue', (e.target as HTMLInputElement).checked)
            emit('change', (e.target as HTMLInputElement).checked)
        }

        return {
            changeHandler,
            checkboxClass
        }
    }
})
</script>

<style scoped lang="less">
@import "../style/checkbox";
</style>
