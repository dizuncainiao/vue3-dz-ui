<template>
  <!--todo  写一个 tab 组件-->
  <nav id="nav">
    <router-link to="/buttonDemo">按钮组件</router-link>
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
</style>
