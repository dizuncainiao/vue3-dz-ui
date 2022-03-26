<template>
  <div class="button-box">
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
    <bd-button-setup
        :size="size"
        :type="type"
        :round="round"
        :disabled="disabled"
        icon="icon-icon-test1"
    >
      Hello BdSaas（setup）
      <template #icon>
        <i class="iconfont icon-icon-test1"></i>
      </template>
    </bd-button-setup>
  </div>


  <div class="box">
    <bd-button type="default" @click="setConfig('size')">设置尺寸</bd-button>
    <bd-button type="default" @click="setConfig('type')">设置类型</bd-button>
    <bd-button type="default" @click="setConfig('round')">设置圆角</bd-button>
    <bd-button type="default" @click="setConfig('disabled')">设置禁用</bd-button>
  </div>
</template>

<script setup lang="ts">
import BdButton from '@/components/button/src/button.vue'
import BdButtonSetup from '@/components/button/src/button-setup.vue'
import {Ref, reactive, toRefs, unref} from "vue"
import {ButtonType, ButtonSize} from '@/components/button/src/interface'

type ArgType = 'size' | 'type' | 'round' | 'disabled'

interface BtnConfig {
  size: ButtonSize
  type: ButtonType
  round: boolean
  disabled: boolean
}

const btnConfig = reactive<BtnConfig>({
  size: 'default',
  type: 'primary',
  round: true,
  disabled: false
})
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

<style>
.box {
  width: 500px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
}

.button-box {
  width: 420px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
</style>
