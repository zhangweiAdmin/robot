<template>
  <div>
    <div class="btnsContainer">
      <a class="linkBtn returnBtn" @click="returnPage">返回</a>
      <a class="linkBtn clear" href="#" @click="clear">清空全部</a>
    </div>
    <div  v-loading="loading2" element-loading-text="拼命加载中啊" style="height:250px">
      <div class="container" v-show="options.length>0">
        <div class="everyItem" v-for="(v,k) in options">
          <p :title='v.text'>{{v.text}}</p>
          <div class="imgs">
            <img  src='../assets/zan.png' v-show='v.status===1'/>
            <img  src='../assets/cai.png' v-show='v.status===2'/>
          </div>
        </div>
      </div>
      <div class="container" v-show="nodata">
        <div class="noData">暂无数据</div>
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
        loading2:true,
        nodata:false
      }
    },
    methods:{
      clear () {
        var self = this
        this.$http.get(baseUrl+'clear_star_list',
        {
          params: {
        
          }
        }).then((response) => {
          this.options=[]
          this.nodata = true
        })
      },
      request (){
        var self = this
        this.$http.get(baseUrl+'star_list',
        {
          params: {
        
          }
        }).then((response) => {
          self.loading2=false
          if(response.body.tbody&&response.body.tbody.length>0){
            self.options =response.body.tbody 
          }else{
            self.nodata = true
          }
          
        })
      },
      returnPage (){
        this.$router.push({name: 'indexPage'})
      }
    },
    mounted () {
      this.request ()
    }
  }
</script>

<style scoped>
  .container{
    margin-top:20px;
    height: 340px;
    overflow: auto;
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
    width: 295px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: left;
    padding:0px 10px;
  }
  .container .everyItem .imgs{
    justify-content:space-between;
    align-items:center;
    display:flex;
    margin-right:10px
  }
  .imgs img{
    width:30px;
    height:30px;
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

</style>