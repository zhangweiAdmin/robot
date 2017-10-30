<template>
  <div id="indexContainer">
    <div class="imgs">
      <div class="indexLogo">
        <img src="../assets/indexLogo.png" alt="" @click="gotoRoot">
      </div>
      <div class="history">
        <img src="../assets/history.png" alt="" @click="toHistory">
      </div>
    </div>
    <div class="options">
      <div class="industry">
        <p class="industryText">选择行业</p>
        <div class="industries" @click="getIndustry">
          <div class="game">
            <div class="industryImgs" id="game" value="游戏"></div>
            <p id="gametext">游戏</p>
          </div>
          <div class="wedding">
            <div class="industryImgs" id="wedding" value="婚纱摄影"></div>
            <p id="weddingtext">婚纱摄影</p>
          </div>
          <div class="more">
            <div class="industryImgs" id="more" value="更多"></div>
            <p id="moretext">更多</p>
          </div>
        </div>
      </div>
      <div class="keyword">
        <p class="keywordText">广告关键词</p>
        <div><input type="text" id="input_keyword" placeholder="关键词用逗号隔开" v-model="keyword"/></div>
      </div>
      <div class="submit">
        <a id="submitBtn" @click="submit">开始创作</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        industry:"",
        keyword:"",
      }
    },
    methods:{
      gotoRoot(){
        this.$router.push({name:'login'})
      },
      toHistory(){
        this.$router.push({name:'history'});
      },
      submit(){

        if(!this.industry){
          alert("请选择行业");
        }else if(!this.keyword){
          alert("请填写关键字");
        }else{
          let self = this;
          this.$router.push({name: 'list', params: {
            industry:self.industry,
            key_word:self.keyword,
            app_name:""
          }});
        }
      },
      getIndustry(event){
        let tag = event.target||event.srcElement;
        let val = tag.getAttribute('value');
        let className = tag.getAttribute('class');
        let classArr=className.split(' ');

        if(val){
          if(val==="更多"){
            alert("你好！暂不支持其他行业");
          }else{
            this.industry=val;
            if(classArr.length!==1){
              tag.setAttribute("class",classArr[0]);
            }
            let newClass = tag.getAttribute('class');
            setTimeout(()=>{
              tag.setAttribute("class",newClass+" bounceIn");
              let game = document.getElementById('gametext');
              let wed = document.getElementById('weddingtext');
              document.querySelector("#game").style.backgroundPosition="0px -178px";
              document.querySelector("#wedding").style.backgroundPosition="0px 192px";
  
              game.style.color="#878787";
              wed.style.color="#878787";
              if(val==="游戏"){
                game.style.color="#e5c725";
                document.querySelector("#game").style.backgroundPosition="0px 0px";
              }else{
                wed.style.color="#6724d1";
                document.querySelector("#wedding").style.backgroundPosition="0px -82px";
              }
            },80)

          }
        }
      }
    }
  }
</script>

<style scoped>
  .indexLogo{
    display:flex;
    margin-top:77px;
  }
  .indexLogo>img{
    margin:0px auto;
  }
  .history>img{
    position:absolute;
    right:50px;
    top:34px;
    cursor: pointer;
  }
  .options{
    margin:0 auto;
    margin-top:72px;
    width:540px;
  }
  .options>div{
    height:88px;
    color:#6724d1;
    font-family: MFJiaHei_Noncommercial Regular;
    font-size:27px;
    display:flex;
    align-items: center;
    justify-content: space-between;
    margin-top:70px;
  }
  .industries{
    display:flex;
    margin-right: -16px;
  }
  .industryImgs{
    width:80px;
    height:77px;
  }
  .industries>div{
    height: 77px;
    width: 80px;
    cursor: pointer;
    margin-right:50px;
    font-size:18px;
  }
  .industries p{
    text-align:center;
    color:#878787;
  }
  .game>div{
    background:url('../assets/options.png');
    background-position: 0px -178px;
  }
  .wedding>div{
    background:url('../assets/options.png');
    background-position: 0px 192px;
  }
  .more>div{
    background:url('../assets/options.png');
    background-position: 0px 90px;
  }
  .keyword div{
    margin-right:50px;
  }
  #input_keyword{
    background:none;
    outline:none;
    border:0px;
    border-radius: 40px;
    border: 2px solid #6724d1;
    width: 280px;
    height: 40px;
    padding:0px 20px;
    font-size:18px;
    color:#878787;
  }
  input::-webkit-input-placeholder {
    text-align: center;
  }
  #indexContainer > div.options > div.submit{
    display: flex;
    justify-content: center;
  }
  #submitBtn{
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
  #submitBtn:hover{
    background:#6724d1;
    color:#fff;
    cursor: pointer;
    border-color:#9e7ad8;
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
