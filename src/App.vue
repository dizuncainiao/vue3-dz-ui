<script setup lang="ts">
import BdButton from '@/components/button/src/button.vue'
import {reactive, Ref, toRefs, unref} from "vue";

type ArgType = 'size' | 'type' | 'round' | 'disabled'

const btnConfig = reactive({
    size: 'default',
    type: 'primary',
    round: true,
    disabled: false
})
const configAsRefs = toRefs(btnConfig)
const {size, type, round, disabled} = configAsRefs
const setValue = (data: Ref, value: any) => {
    data.value = value
}
const setHandler = {
    size: () => setValue(size, unref(size) === 'default' ? 'small' : 'default'),
    type: () => setValue(type, unref(type) === 'primary' ? 'default' : 'primary'),
    round: () => setValue(round, !unref(round)),
    disabled: () => setValue(disabled, !unref(disabled)),
}

function setConfig(type: ArgType) {
    setHandler[type as ArgType]()
}
</script>

<template>
    <bd-button
        :size="size"
        :type="type"
        :round="round"
        :disabled="disabled"
        icon="icon-icon-test1"
    >
        Hello BdSaas
        <template #icon>
            <i class="iconfont icon-icon-test"></i>
        </template>
    </bd-button>

    <div class="box">
        <bd-button type="default" @click="setConfig('size')">设置尺寸</bd-button>
        <bd-button type="default" @click="setConfig('type')">设置类型</bd-button>
        <bd-button type="default" @click="setConfig('round')">设置圆角</bd-button>
        <bd-button type="default" @click="setConfig('disabled')">设置禁用</bd-button>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.box {
    width: 500px;
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
}
</style>
