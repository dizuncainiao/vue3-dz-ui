<template>
    <button :class="buttonClass" :disabled="isDisabled">
        <slot></slot>
        <slot name="icon">
        </slot>
        <!--fixme iconSlot 代码语义优化-->
        <i v-if="!iconSlot" :class="iconClass"></i>
    </button>
</template>

<script lang="ts">
import {defineComponent, toRefs, ref, computed, PropType} from "vue"
import {ButtonSize, ButtonType, IconType} from "@/components/button/src/interface"
// import {ComponentOptionsBase} from "@vue/runtime-core"

export default defineComponent({
    name: "button-default",
    props: {
        type: {
            // fixme 1.必须使用 PropType 包装的方式才能实现复杂类型检查
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
        // fixme 3.规定具名插槽优先于 props
        icon: {
            // fixme 2.必须启用 required 才能实现 props 类型校验
            type: String as PropType<IconType>,
            // required: true
        },
        size: {
            type: String as PropType<ButtonSize>,
            default: 'default',
            required: true
        }
    },
    setup(props, {emit, slots}) {
        const {icon} = toRefs(props)
        const buttonClass = computed(() => [
            'bd-button',
            `bd-button-${props.type}`,
            props.disabled && 'bd-button-disabled',
            props.round && 'bd-button-round'
        ])
        const isDisabled = ref(props.disabled)
        // 判断是否有 icon 插槽
        const iconSlot = ref(!!slots.icon)
        const iconClass = computed(() => [
            'iconfont',
            !iconSlot.value && icon.value
        ])

        function clickHandler(event: MouseEvent) {
            emit('click', event)
        }

        // fixme 4.如何实现同时存在 “具名插槽” 和 “props.icon” 时，优先具名插槽

        return {
            iconClass,
            iconSlot,
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
