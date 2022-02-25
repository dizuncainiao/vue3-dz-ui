<template>
    <button :class="buttonClass" :disabled="isDisabled">
        <slot></slot>
        <slot name="icon"></slot>
    </button>
</template>

<script lang="ts">
import {defineComponent, computed, ref, PropType} from "vue"
import {ButtonSize, ButtonType, IconType} from "@/components/button/src/interface";

export default defineComponent({
    name: "button-default",
    props: {
        type: {
            // fixme
            type: String as PropType<ButtonType>,
            default: 'default',
            required: true
        },
        disabled: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        round: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        icon: {
            // fixme 必须启用 required 才能实现 props 类型校验
            type: String as PropType<IconType>,
            // required: true
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: 'default',
            required: true
        }
    },
    setup(props, {emit}) {
        const buttonClass = computed(() => [
            'bd-button',
            `bd-button-${props.type}`,
            props.disabled && 'bd-button-disabled',
            props.round && 'bd-button-round'
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
