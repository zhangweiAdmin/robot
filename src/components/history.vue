<template>
  <div id="listContainer">
    <div class="imgs">
      <div class="listLogo">
        <img src="../assets/list-history.png" alt="">
      </div>
    </div>

    <div class="content" v-loading="loading2" element-loading-text="拼命加载中...">
      <div class="item">
        <img src="../assets/item.png" alt="">
      </div>
      <div class="listDatas" v-show="!noData">
        <div class="everyData" v-for="(val,key) in listData">
          <p class="dataText">{{val.text}}</p>
          <div class="zanOrCai">
            <img src="../assets/zan.png" alt="" v-show='val.status===1'>
            <img src="../assets/cai.png" alt="" v-show='val.status===2'>
          </div>
        </div>
      </div>
      <div class="listDatas nodata" v-show="noData">
        <img src="../assets/nodata.png" alt="">
      </div>
    </div>
    <div class="bottom">
      <router-link id="turnPage" to="/index">返回</router-link>
    </div>
  </div>
</template>
<script>
  const baseUrl='http://10.75.29.39:8013/';
  export default {
    data () {
      return {
        loading2:true,
        listData:[{}],
        noData:false
      }
    },
    methods:{
      clear(){
        var self = this;
        this.$http.get(baseUrl+'clear_star_list',
          {
            params: {}
          }).then((response) => {
          self.listData=[];
          self.nodata = true
        })
      }
    },
    mounted(){
      var self = this;
      this.$http.get(baseUrl+'star_list',
        {
          params: {}
        }).then((response) => {
        self.loading2=false;
        if(response.body.tbody&&response.body.tbody.length>0){
          self.listData =response.body.tbody;
        }else{
          self.noData = true;
        }
      })
    }
  }
</script>

<style scoped>
  .nodata{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .listLogo{
    display:flex;
    margin-top:77px;
    justify-content: center;
  }
  .indexLogo>img{
    margin:0px auto;
  }
  .content{
    display:flex;
    justify-content: center;
    margin-top:45px;
  }
  .listDatas{
    width:615px;
    height:380px;
    overflow: auto;
  }
  .item{
    margin-right:15px;
    margin-top:12px;
  }
  .everyData{
    display:flex;
    justify-content: center;
    align-items: center;
  }
  .everyData p{
    min-height:58px;
    border:1px solid #b5b5b5;
    width:504px;
    background:#f5f5f5;
    color:#878787;
    border-radius:20px;
    display: flex;
    align-items: center;
    padding: 5px 20px;
  }
  .zanOrCai{
    margin-left:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .zanOrCai>img{
    height:46px;
    height:46px;
    margin-right:10px;
  }
  .bottom{
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:70px;
  }
  #turnPage{
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
  #turnPage:hover{
    background:#6724d1;
    color:#fff;
    cursor: pointer;
  }

</style>
