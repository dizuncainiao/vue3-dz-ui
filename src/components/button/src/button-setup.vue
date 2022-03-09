<template>
    <button :class="buttonClass" :disabled="isDisabled">
        <slot></slot>
        <slot name="icon">
        </slot>
        <i v-if="showPropIcon" :class="iconClass"></i>
    </button>
</template>
<script lang="ts">
export default {
    name: 'ButtonSetup'
}
</script>
<script setup lang="ts">
import {toRefs, ref, useSlots, computed} from "vue"
import type {Props} from "@/components/button/src/interface"

const slots = useSlots()

const props = withDefaults(defineProps<Props>(), {
    type: 'default',
    disabled: false,
    round: false,
    size: 'default'
})

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

</script>

<style scoped lang="less">
@import "../style/button";
</style>
