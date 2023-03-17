<template>
  <h1>Home Bound College</h1>
    <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body {
  background-image: linear-gradient(to left, #6da1fc, #23d3ff);
}
</style>
