<template>
  <div id="app">
    <div class="content">
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
  //background:#f5f5f5;
}

@media screen and (max-width: 600px) {
  #app{
    margin-top: 20px;
  }
  #header img{
    width:80%;
  }
}
#header{
  display:flex;
  align-item:center;
  justify-content:center;
  margin-bottom:20px;
}
</style>
