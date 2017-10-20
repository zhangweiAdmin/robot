<template>
  <div id="app">
    <div>
      <header id="header">
        <img src="./assets/header.png">
      </header>
      <router-view/>
    </div>
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
  margin-top: 200px;
  display:flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 600px) {
  #app{
    margin-top: 100px;
  }
}
#header{
  display:flex;
  align-item:center;
  justify-content:center;
  margin-bottom:20px;
}
</style>
