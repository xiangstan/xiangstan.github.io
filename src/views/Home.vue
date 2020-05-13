<template>
  <div class="wrapper">
    <div class="index-greeting container">
      <div class="has-text-centered">
        <h1 class="is-size-2">xiangstan.github.io</h1>
        <h4 class="is-size-6 is-italic">Xiang Shan Tan</h4>
        <div class="index-contact">
          <a class="index-icon icon-github" href="https://github.com/xiangstan/" target="_blank">
            <font-awesome-icon class="fa-fw" :icon="['fab', 'github']"></font-awesome-icon>
          </a>
          <a class="index-icon icon-gitlab" href="https://gitlab.com/lnakuma" target="_blank">
            <font-awesome-icon class="fa-fw" :icon="['fab', 'gitlab']"></font-awesome-icon>
          </a>
          <a class="index-icon icon-twitter" href="https://twitter.com/Xiang_sTan" target="_blank">
            <font-awesome-icon class="fa-fw" :icon="['fab', 'twitter']"></font-awesome-icon>
          </a>
          <a class="index-icon icon-msft" href="mailto:xtan@uccs.edu">
            <font-awesome-icon class="fa-fw" icon="envelope"></font-awesome-icon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
.index-contact {
  padding: 20px 0
}
.index-greeting {
  align-items: center;
  color: #51565b;
  display: flex;
  height: 100%;
  max-width: 99%;
  justify-content: center
}
.index-icon {
  color:#9fa5a9;
  display:inline-block;
  font-size:3.5rem;
  margin:0 5px;
  position:relative;
  text-align:center;
  z-index:1
}
.index-icon:hover {
  text-shadow:-1px -1px 5px rgba(0,0,0,.4)
}
.index-icon.icon-github:hover {
  color:#333
}
.index-icon.icon-gitlab:hover {
  color:#fc6d26
}
.index-icon.icon-msft:hover {
  color:#00a1f1
}
.index-icon.icon-twitter:hover {
  color:#1da1f2
}
.page-container {
  display:block;
  height:100vh;
  overflow:auto;
  padding-top:65px;
  text-align:center;
  width:100%
}
</style>
