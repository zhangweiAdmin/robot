<template>
  <div class="indexPage">
    <div class="indexBody">
      <ul>
        <li class="industry">
          <span>行业选择</span><div class="industrySelect"><selects @selectChange='selectChange' class="selectCls"></selects></div>
        </li>
        <!--<li class="appName">
          <span>应用名称</span><div class="industrySelect"> <input class="input" v-model='appname'/></div>
        </li>-->
        <li class="adKeyword">
          <span>广告关键词</span><div class="industrySelect"><input class="input" placeholder="关键词用逗号分隔" v-model='keywords'/></div>
        </li>
      </ul>    
    </div>
    <div class="indexFoot">
      <div class="submit" @click="submit">立即创作</div>
    </div>
    <!-- <div class="history">
        <img src="../assets/history.png" @click="toHistory">
    </div> -->
  </div>
</template>

<script>
import selects from './selects'
export default {
  name: 'indexPage',
  data () {
    return {
      selectData :"",
      appname:"",
      keywords:""
    }
  },
  methods: {
    submit () {
      var industry = this.selectData
      var appname = this.appname
      var keywords = this.keywords
      if(industry===''){
        alert('请选择行业')
      }else if(keywords===''){
        alert('请输入关键字')
      }else{
        this.$router.push({name: 'listPage', params: {"industry":industry,"app_name":appname,"key_word":keywords}})
      }
    },
    selectChange (data) {
      this.selectData = data
    },
    toHistory (){
      this.$router.push({name:'history'});
    }
  },
  components: {selects}
}
</script>

<style  type="text/css" scoped>
  li{
    list-style:none;
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }

  li span{
    margin-right:20px;
    font-size:17px;
    color:#878787;
  }
  
  .indexBody{
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .indexBody ul{
    padding:20px;
  }
  .input{
      width: 300px;
      height: 36px;
      border:1px solid #ccc;
      border-radius:4px;
      padding:0px 10px;
  }
  .selectCls{
      width:320px;
  }
  .indexFoot{
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:30px
  }
  .submit{
    width:90px;
    height:40px;
    background:#0070c0 ;
    border:1px solid #ccc;
    border-radius:4px;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    cursor:pointer;
  }
  .history{
    margin-top:80px;
    float:right;
    margin-right:30px
  }
  
  @media screen and (max-width: 600px) {
    li {
      width:100%;
      height:80px;
    }
    li div{
      width:100%;
    }
    .input{
      width:200px;
    }
    li span{
      width:100px;
    }
    .selectCls{
      width:220px;
    }
  }
  @media screen and (max-width: 400px) {
    .input{
      width:160px;
    }
    .selectCls{
      width:180px;
    }
  }
  
  
</style>

