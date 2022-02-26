<script setup lang="ts">
import BdButton from '@/components/button/src/button.vue'
import {Ref, reactive, toRefs, unref} from "vue"
import {ButtonType, ButtonSize} from '@/components/button/src/interface'

type ArgType = 'size' | 'type' | 'round' | 'disabled'

interface BtnConfig {
    size: ButtonSize
    type: ButtonType
    round: boolean
    disabled: boolean
}

// fixme 1.reactive 和 ref 区别（reactive 和 ref 都是用来定义响应式数据的 reactive更推荐去定义复杂的数据类型 ref 更推荐定义基本类型）
const btnConfig = reactive<BtnConfig>({
    size: 'default',
    type: 'primary',
    round: true,
    disabled: false
})
// fixme 2.当从组合式函数返回响应式对象时，toRefs 非常有用，这样消费组件就可以在不丢失响应性的情况下对返回的对象进行解构/展开
const configAsRefs = toRefs(btnConfig)
const {size, type, round, disabled} = configAsRefs

// fixme 3.使用泛型约束只能入我们想要的参数
function setValue<T, U extends T>(data: Ref<T>, value: U) {
    data.value = value
}

const setHandler = {
    size: () => setValue<ButtonSize, ButtonSize>(size, unref(size) === 'default' ? 'small' : 'default'),
    type: () => setValue<ButtonType, ButtonType>(type, unref(type) === 'primary' ? 'default' : 'primary'),
    round: () => setValue<boolean, boolean>(round, !unref(round)),
    disabled: () => setValue<boolean, boolean>(disabled, !unref(disabled)),
}

function setConfig(type: ArgType) {
    setHandler[type]()
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
