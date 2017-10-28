<template>
  <div id="listContainer">
    <div class="imgs">
      <div class="listLogo">
        <img src="../assets/list-history.png" alt="">
      </div>
      <div class="history">
        <img src="../assets/history.png" alt="" @click="toHistory">
      </div>
    </div>

    <div class="content" v-loading="loading2" element-loading-text="拼命加载中...">
      <div class="item" v-show="!noData">
        <img src="../assets/item.png" alt="">
      </div>
      <div class="listDatas" v-show="!noData">
        <div class="everyData" v-for="(val,key) in listData">
          <p class="dataText">{{val.text}}</p>
          <div class="zanOrCai">
            <img src="../assets/zan.png" alt="" @click="request(val.id,1,$event)">
            <img src="../assets/cai.png" alt="" @click="request(val.id,2,$event)">
          </div>
        </div>
      </div>
      <div class="listDatas nodata" v-show="noData">
        <img src="../assets/nodata.png" alt="">
      </div>
    </div>
    <div class="bottom" v-show="listData.length!==0">
      <a id="turnPage" href="">再来一波</a>
    </div>
  </div>
</template>
<script>
  const baseUrl='http://10.75.29.39:8013/';
  export default {
    data () {
      return {
        loading2:true,
        listData:[],
        noData:false,
        baseParam:"",
        pageCount:1
      }
    },
    methods:{
      toHistory(){
        this.$router.push({name:'history'});
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
      init(params){
        if(params.industry){
          var self = this;
          //获取初始化列表数据
          this.$http.get(baseUrl+"list",
            {
              params: params
            }).then((response) => {
            self.loading2 = false;
            if(response.body.tbody && response.body.tbody.length>0){
              self.listData =response.body.tbody;
            }else{
              self.listData=[];
              self.noData = true;
            }
          })
        }else{
          this.$router.push({name:'index'});
        }
      },
      turnPage (){
        var params=this.baseParam;
        params.page=++this.pageCount;
        params.rows='6';
        this.init(params)
      }
    },
    mounted(){
        let params = this.$route.params;
        this.baseParam = params;
        this.init(params);
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
  .history>img{
    position:absolute;
    right:50px;
    top:34px;
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
    padding: 0px 20px;
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
