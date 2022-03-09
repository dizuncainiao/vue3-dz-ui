<template>
    <button :class="buttonClass" :disabled="isDisabled">
        <slot></slot>
        <slot name="icon">
        </slot>
        <i v-if="showPropIcon" :class="iconClass"></i>
    </button>
</template>

<script lang="ts">
import {defineComponent, toRefs, ref, computed, PropType} from "vue"
import {ButtonSize, ButtonType, IconType} from "@/components/button/src/interface"
// import {ComponentOptionsBase} from "@vue/runtime-core"

export default defineComponent({
    name: "BdButton",
    props: {
        type: {
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
            type: String as PropType<IconType>,
            // required: true
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: 'default'
        }
    },
    setup(props, {slots}) {
        const {icon} = toRefs(props)
        const buttonClass = computed(() => [
            'bd-button',
            `bd-button-${props.type}`,
            props.disabled && 'bd-button-disabled',
            props.round && 'bd-button-round',
            props.size && `bd-button-size-${props.size}`
        ])
        const isDisabled = ref(props.disabled)
        const showPropIcon = computed(() => !slots.icon && props.icon)
        const iconClass = computed(() => [
            'iconfont',
            showPropIcon.value && icon.value
        ])

        return {
            iconClass,
            showPropIcon,
            buttonClass,
            isDisabled,
        }
    }
})
</script>

<style scoped lang="less">
@import "../style/button";
</style>
