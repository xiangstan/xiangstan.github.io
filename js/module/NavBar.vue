
<template>
  <nav class="navbar is-fixed-top is-light" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#" style="font-weight:bold;">
          Xiang S Tan (檀香山)
        </a>
        <span class="navbar-burger burger" data-target="navMenu" @click="ShowNav=!ShowNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </span>
      </div>
      <div id="navMenu" class="navbar-menu" :class="{'is-active':ShowNav}">
        <div class="navbar-end">
          <a href="/" class="navbar-item" :class="isActivePage('home')">Home</a>
          <a href="/blog/" class="navbar-item" :class="isActivePage('blog')">Blog</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
module.exports = {
  data(){
    return {
      ShowNav:false
    };
  },
  methods:{
    isActivePage:function(data){ return (this.page===data)?"is-active":""; }
  },
  props:{
    page:{type:String,default:false}
  }
}
</script>

<style scoped>
</style>
