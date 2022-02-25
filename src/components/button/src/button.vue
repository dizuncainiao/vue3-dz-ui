<template>
    <button :class="buttonClass">
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue"

export default defineComponent({
    name: "button-default",
    props: {
        type: {
            type: String,
            default: 'default'
        },
    },
    setup(props) {
        const buttonClass = computed(() => [
            'bd-button',
            `bd-button-${props.type}`
        ])
        return {buttonClass}
    }
})
</script>

<style scoped lang="less">
@import "../style/button";
</style>
