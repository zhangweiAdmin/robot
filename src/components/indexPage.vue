<template>
  <div class="indexPage">
    <div class="indexBody">
      <ul>
        <li class="industry">
          <span>行业选择</span><div class="industrySelect"><selects @selectChange='selectChange'></selects></div>
        </li>
        <li class="appName">
          <span>应用名称</span><div class="industrySelect"> <input class="input"/></div>
        </li>
        <li class="adKeyword">
          <span>广告关键词</span><div class="industrySelect"><input class="input" placeholder="广告关键词可输入多个用逗号分隔"/></div>
        </li>
      </ul>    
    </div>
    <div class="indexFoot">
      <div class="submit" @click="submit">立即创作</div>
    </div>
    <div class="history">
        <img src="../assets/history.png">
    </div>
  </div>
</template>

<script>
import selects from './selects'
export default {
  name: 'indexPage',
  data () {
    return {
      selectData :""
    }
  },
  methods: {
    submit () {
      var hangye=this.selectData
      this.$router.push({name: 'listPage', params: {"hangye":hangye}})
    },
    selectChange (data) {
      this.selectData = data
    }
  },
  components: {selects}
}
</script>

<style scoped>
  li{
    list-style:none;
    height:70px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  li span{
    margin-right:20px;
    font-size:14px;
    color:#323232;
  }
  li div{
    width:230px;
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
      width:210px;
      height:30px;
      border:1px solid #ccc;
      border-radius:4px;
      padding:0px 10px;
  }
  .indexFoot{
    width:100%;
    display:flex;
    justify-content:center;
    margin-top:30px
  }
  .submit{
    width:120px;
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
  .history{
    margin-top:40px;
    float:right;
    margin-right:30px
  }
</style>

