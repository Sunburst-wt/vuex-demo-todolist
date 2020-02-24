<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Father msg="vuex-demo-todolist"/>
  </div>
</template>

<script>
import Father from './components/Father.vue'

export default {
  name: 'App',
  components: {
    Father
  }
}
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
</style>
