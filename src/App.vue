<script setup lang="ts">
import BdButton from '@/components/button/src/button.vue'

const clickHandler = (e: MouseEvent, msg: string) => {
    console.log(e, msg);
}
</script>

<template>
    <bd-button
        type="primary"
        round
        @click="clickHandler($event, 'Hello world!')"
        icon="icon-jiahao2"
        size="small"
    >
        Hello BdSaas
        <template #icon>
            <i class="iconfont icon-sousuo"></i>
        </template>
    </bd-button>
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
</style>
