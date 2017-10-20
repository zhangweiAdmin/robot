<template>
  <div v-loading="loading2" element-loading-text="拼命加载中啊" style="height:250px">
    <div class="container" v-show="options.length>0">
      <div class='everyItemCon'>
        <div class="everyItem" v-for="(v,k) in options" >
          <p :title='v.text'>{{v.text}}</p>
          <div class="imgs">
            <img src='../assets/zan.png' @click="request(v.id,1,$event)"></img>
            <img src='../assets/cai.png' @click="request(v.id,2,$event)"></img>
          </div>
          </div>
      </div>
    <div class="turnPage" @click='turnPage'>换一批</div>
    <div class="history">
        <img src="../assets/history.png" @click="toHistory"/>
    </div>
    </div>
    <div class="container" v-show="nodata">
      <div class="noData">暂无数据</div>
      <div class="history">
          <img src="../assets/history.png" @click="toHistory"/>
      </div>
    </div>
  </div>
</template>

<script> 
  const baseUrl='http://10.75.29.39:8013/'
  export default {
    data () {
      return {
        options: [],
        value: '',
        isActive:false,
        baseParam:"",
        pageCount:1,
        keywords:"",
        industry:"",
        loading2:true,
        nodata:false
      }
    },
    methods:{
      toHistory () {
        this.$router.push({name: 'history', params: this.baseParam})
      },
      request (itemId,state,evt){
        var tag = evt.srcElement||evt.target;
        var parentTag = tag.parentNode;
        var imgs = parentTag.childNodes;
        
        this.$http.get(baseUrl+"update_status",
        {
          params:{"id":itemId,"target_status":state}
        }).then((response) => {
          imgs.forEach(function(val,key){
            if(val.nodeType===1){
               val.setAttribute('class',"")
            }
          });
          tag.setAttribute('class',"bounceIn")
        })
      },
      init (params){
        var self = this
        //获取初始化列表数据
        this.$http.get(baseUrl+"list",
        {
          params: params
        }).then((response) => {
          self.loading2 = false
          if(response.body.tbody&&response.body.tbody.length>0){
            self.options =response.body.tbody
          }else{
            this.nodata = true
          }
        })
      },
      turnPage (){
        var params=this.baseParam
        params.page=++this.pageCount;
        params.rows='8'
        this.init(params)
      }
    },
    mounted (){
      this.baseParam=this.$route.params
      var params=this.baseParam
      params.page=this.pageCount
      params.rows='8'
      this.init(params)
    }
  }
</script>

<style scoped>
  .active{
    border:1px solid #000;
  }
  .container{
    margin-top:80px;
  }
  .everyItemCon{
    height:380px;
  }
  .container .everyItem{
    width:330px;
    height:50;
    display:flex;
    justify-content:space-between;
    background:#ccc;
    margin:0px auto;
    margin-bottom:10px;
    font-size:12px;
    border-radius:5px;
  }

  .everyItem p{
    width: 285px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    padding: 0px 10px;
  }
  @media screen and (max-width: 600px) {
    .container .everyItem{
      //width:
    }
    .everyItem p{

    }
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
  @keyframes bounceIn {
    0%,100%,20%,40%,60%,80% {
      -webkit-transition-timing-function: cubic-bezier(0.215,.61,.355,1);
      transition-timing-function: cubic-bezier(0.215,.61,.355,1)
    }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(.3,.3,.3);
    -ms-transform: scale3d(.3,.3,.3);
    transform: scale3d(.3,.3,.3)
  }

  20% {
    -webkit-transform: scale3d(1.1,1.1,1.1);
    -ms-transform: scale3d(1.1,1.1,1.1);
    transform: scale3d(1.1,1.1,1.1)
  }

  40% {
    -webkit-transform: scale3d(.9,.9,.9);
    -ms-transform: scale3d(.9,.9,.9);
    transform: scale3d(.9,.9,.9)
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03,1.03,1.03);
    -ms-transform: scale3d(1.03,1.03,1.03);
    transform: scale3d(1.03,1.03,1.03)
  }

  80% {
    -webkit-transform: scale3d(.97,.97,.97);
    -ms-transform: scale3d(.97,.97,.97);
    transform: scale3d(.97,.97,.97)
  }

  100% {
    opacity: 1;
    -webkit-transform: scale3d(1,1,1);
    -ms-transform: scale3d(1,1,1);
    transform: scale3d(1,1,1)
  }
}

  .bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s
  }
  img:hover{
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