<template>
    <button :class="['bd-button', ]">
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
    name: "button-default",
    props: {
        msg: {
            type: String,
            default: 'Hello'
        },
    },
    setup() {

    }
})
</script>

<style scoped lang="less">
@import "../style/button";
</style>
