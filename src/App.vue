<script setup lang="ts">
import BdButton from '@/components/button/src/button.vue'

const clickHandler = (e: MouseEvent) => {
    console.log(e);
}
</script>

<template>
    <bd-button type="primary" @click="clickHandler">
        Hello BdSaas
        <i class="iconfont icon-sousuo"></i>
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
