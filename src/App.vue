<template>
  <div id = "app">
    <NavBar />
    <router-view />
    <Menu />
  </div>
</template>

<script>
import Menu from "@/components/Menu"
import NavBar from "@/components/NavBar"

export default {
  name: "App",
  components: {
    Menu,
    NavBar
  }
}
</script>

<style>
</style>
