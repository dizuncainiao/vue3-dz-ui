<template>
    <button :class="buttonClass" :disabled="isDisabled">
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>

<script lang="ts">
import {defineComponent, computed, ref} from "vue"

export default defineComponent({
    name: "button-default",
    props: {
        type: {
            type: String,
            default: 'default'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {emit}) {
        const buttonClass = computed(() => [
            'bd-button',
            `bd-button-${props.type}`,
            props.disabled && 'bd-button-disabled'
        ])
        const isDisabled = ref(props.disabled)

        function clickHandler(event: MouseEvent) {
            emit('click', event)
        }


        return {
            buttonClass,
            isDisabled,
            clickHandler
        }
    }
})
</script>

<style scoped lang="less">
@import "../style/button";
</style>
