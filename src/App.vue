<template>
  <div id="app">
    <header id="header">
      <img src="./assets/header.png">
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 100px;
}
#header{
  display:flex;
  align-item:center;
  justify-content:center;
  margin-bottom:20px;
}
</style>
