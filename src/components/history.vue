<template>
  <div>
    <div class="btnsContainer">
      <router-link class="linkBtn returnBtn" to="/list">返回</router-link>
      <a class="linkBtn clear" href="#" @click="clear">清空全部</a>
    </div>
    <div class="container" v-show="options.length>0">
      <div class="everyItem" v-for="(v,k) in options">
        <p>{{v.text}}</p>
        <div class="imgs">
          <img class="zan" src='../assets/zan.png' v-show='v.isZanOrCai===1'/>
          <img class="cai" src='../assets/cai.png' v-show='v.isZanOrCai===0'/>
        </div>
      </div>
    </div>
    <div class="container" v-show="options.length<=0">
      <div class="noData">暂无数据</div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        options: [],
        value: '',
      }
    },
    methods:{
      clear () {
        this.options=[];
      },
      request (){
        var self = this
        this.$http.get('/static/list.json',
        {
          params: {
        
          }
        }).then((response) => {
          self.options =response.data.data.list 
        })
      }
    },
    mounted () {
      this.request ()
    }
  }
</script>

<style scoped>
  .container{
    margin-top:40px;
  }
  .container .everyItem{
    width:330px;
    height:50;
    display:flex;
    justify-content:space-between;
    background:#ccc;
    margin:0px auto;
    margin-bottom:10px;
    font-size:12px
  }
  .container .everyItem .imgs{
    justify-content:space-between;
    align-items:center;
    display:flex;
    margin-right:10px
  }
  .btnsContainer{
    width:330px;
    height:60px;
    margin:0 auto;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }
  .btnsContainer .linkBtn{
    text-decoration:none;
    display:flex;
    width:100px;
    height:30px;
    background:#0070c0 ;
    border:1px solid #ccc;
    border-radius:4px;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    cursor:pointer;
  }
  .btnsContainer .returnBtn{
    width:60px;
  }
</style>