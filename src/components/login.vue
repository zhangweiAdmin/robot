<template>
	<div id="loginContent">
    <div class="logoContainer">
      <img src="../assets/loginLogo.png"/>
    </div>
    <div class="btnsContainer">
      <!--<a href="#" id="loginBtn" @click="goSystem">进入系统</a>-->
      <router-link id="loginBtn" to="/index">进入系统</router-link>
    </div>
	</div>
</template>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style scoped>
  .logoContainer{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:80px;
  }
  .btnsContainer{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:150px;
  }
  #loginBtn{
    width:170px;
    height:48px;
    text-decoration: none;
    border:2px solid #6724d1;
    background:#fff;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#6724d1;
    font-family: MFJiaHei_Noncommercial Regular;
    font-size:20px;
  }
  #loginBtn:hover{
    background:#6724d1;
    color:#fff;
    cursor: pointer;
    border-color:#9e7ad8;
  }
</style>
