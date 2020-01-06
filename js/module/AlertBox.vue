
<template>
  <div class="anime-box" :class="AlertStatus" id="anime-box">
    <p class="has-text-centered" id="anime-message">{{error.msg}}</p>
  </div>
</template>

<script>
module.exports={
  computed:{
    AlertStatus:function(){
      let cssClass="";
      cssClass=(this.error.alert)?"active":"";
      cssClass+=(this.error.no)?" has-background-success":" has-background-danger";
      return cssClass;
    }
  },
  data(){
    return {
      ShowNav:false
    };
  },
  methods:{
  },
  props:{
    error:{type:Object,default:{alert:false}},
  },
  mounted(){
  },
}
</script>

<style scoped>
  @-webkit-keyframes exp{
    0%{ opacity:0; }
    30%{ opacity:1; transform:translateY(-30px); }
    100%{ opacity:0; transform:translateY(-30px); }
  }
  @-moz-keyframes exp{
    0%{ opacity:0; }
    30%{ opacity:1; transform:translateY(-30px); }
    100%{ opacity:0; transform:translateY(-30px); }
  }
  @-o-keyframes exp{
    0%{ opacity:0; }
    30%{ opacity:1; transform:translateY(-30px); }
    100%{ opacity:0; transform:translateY(-30px); }
  }
  @keyframes exp{
    0%{ opacity:0; }
    30%{ opacity:1; transform:translateY(-30px); }
    100%{ opacity:0; transform:translateY(-30px); }
  }
  .anime-box{
    border-radius:10px;
    color:#fff;
    display:none;
    font-size:24px;
    font-weight:bold;
    height:auto;
    width:50%;
    left:25%;
    line-height:50px;
    margin-top:-40px;
    opacity:0;
    padding:20px;
    position:fixed;
    top:50%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    z-index:8000;
  }
  .anime-box.active{
    display:block!important;
    -webkit-animation:exp 5s;
    -moz-animation:exp 5s;
    -o-animation:exp 5s;
    animation:exp 5s;
  }
</style>
