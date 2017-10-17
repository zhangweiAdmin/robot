<template>
  <div>
    <div class="btnsContainer">
      <a class="linkBtn returnBtn" @click="returnPage">返回</a>
      <a class="linkBtn clear" href="#" @click="clear">清空全部</a>
    </div>
    <div  v-loading="loading2" element-loading-text="拼命加载中啊">
      <div class="container" v-show="options.length>0">
        <div class="everyItem" v-for="(v,k) in options">
          <p>{{v.text}}</p>
          <div class="imgs">
            <img class="zan" src='../assets/zan.png' v-show='v.status===1'/>
            <img class="cai" src='../assets/cai.png' v-show='v.status===2'/>
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
  export default {
    data () {
      return {
        options: [],
        value: '',
        preParam:'',
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
          this.options=[];
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
        this.$router.push({name: 'listPage', params: this.preParam})
      }
    },
    mounted () {
      this.preParam=this.$route.params
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