<template>
    <nav id="nav">
        <router-link to="/buttonDemo">按钮组件</router-link>
        |
        <router-link to="/checkboxDemo">复选框组件</router-link>
        |
        <router-link to="/listDemo">列表组件</router-link>
    </nav>
    <router-view/>
</template>

<script setup lang="ts">
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

#nav {
    margin-bottom: 20px;
}

.router-link-active {
    color: #ff8246;
    font-weight: bold;
}
</style>
