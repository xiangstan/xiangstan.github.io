<template>
  <header :class="isFixed">
    <a class="has-text-weight-bold is-inline-block" :class="isActive">
      Xiang S Tan (檀香山)
    </a>
    <a class="is-inline-block is-pulled-right" :class="isActive" @click="ShowNav">
      <font-awesome-icon class="fa-fw" icon="bars"></font-awesome-icon>
    </a>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    isFixed() {
      return (this.$store.state.Expands.Menu) ? "isFixed" : ""
    },
    isActive() {
      return (this.$store.state.Expands.Menu) ? "has-text-light" : "has-text-grey-dark"
    },
    Nav() {
      return this.$store.state.Expands.Menu;
    }
  },
  methods: {
    ShowNav() {
      this.$store.commit("UpdExpand", {cat: "Menu", value: !this.Nav});
    }
  }
}
</script>

<style scoped>
header {
  font-size: 1.25rem;
  padding: 30px;
  position: absolute;
  width: 100%;
  z-index: 5;
}
header.isFixed {
  position: fixed !important;
}
header a {
  -moz-transition: 0.5s;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
</style>
