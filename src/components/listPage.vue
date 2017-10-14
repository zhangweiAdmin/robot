<template>
  <div>
    <div class="container" v-show="options.length>0">
      <div class="everyItem" v-for="(v,k) in options">
        <p>{{v.text}}</p>
        <div class="imgs" :itemId='v.itemId'>
          <img class="zan" src='../assets/zan.png' @click="request(v.itemId,1,$event)"></img>
          <img class="cai" src='../assets/cai.png' @click="request(v.itemId,0,$event)"></img>
        </div>
      </div>
      <div class="turnPage">换一批</div>
      <div class="history">
          <img src="../assets/history.png" @click="toHistory"/>
      </div>
    </div>
    <div class="container" v-show="options.length<=0">
      <div class="noData">暂无数据</div>
      <div class="history">
          <img src="../assets/history.png" @click="toHistory"/>
      </div>
    </div>
  </div>
</template>
s
<script> 
  export default {
    data () {
      return {
        options: [],
        value: '',
        isActive:false
      }
    },
    methods:{
      toHistory () {
        this.$router.push({name: 'history', params: 'hahaha'})
      },
      request (itemId,state,evt){
        var tag = evt.srcElement||evt.target;
        var parentTag = tag.parentNode;
        var imgs = parentTag.childNodes;
        
        this.$http.get('/static/list.json',
        {
          params:{"itemId":itemId,"state":state}
        }).then((response) => {
          imgs.forEach(function(val,key){
            if(val.nodeType===1){
              val.style.border="1px solid #ccc"
            }
          });
          tag.style.border='1px solid #888'

          self.options =response.data.data.list 
        })
      },
    },
    mounted (){
      console.log(this.$route.params)
      var self = this
      //获取初始化列表数据
      this.$http.get('/static/list.json',
      {
        params: this.$route.params
      }).then((response) => {
        self.options =response.data.data.list 
      })
    }
  }
</script>

<style scoped>
  .active{
    border:1px solid #000;
  }
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
  }
  .imgs img{
    width:30px;
    height:30px;
    margin-right:10px;
  }
  img:hover{
    border:1px solid #878787;
    cursor:pointer;
  }
  .turnPage{
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
    margin: 0 auto;
    margin-top:40px;
  }
  .history{
    margin-top:40px;
    float:right;
    margin-right:30px
  }
</style>