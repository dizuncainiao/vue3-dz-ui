<template>
  <nav id="nav">
    <router-link to="/buttonDemo">按钮组件</router-link>
    |
    <router-link to="/checkboxDemo">复选框组件</router-link>
    |
    <router-link to="/listDemo">列表组件</router-link>
    |
    <router-link to="/inputDemo">输入框组件</router-link>
    |
    <router-link to="/selectDemo">下拉框组件</router-link>
    |
    <router-link to="/testPinia">Pinia Demo</router-link>
  </nav>
  <router-view />
</template>

<script setup lang="ts"></script>

<style>
#app {
  margin-top: 60px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  margin-bottom: 20px;
  text-align: center;
}

.router-link-active {
  font-weight: bold;
  color: #ff8246;
}
</style>
