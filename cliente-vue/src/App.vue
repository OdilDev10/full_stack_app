<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <div >
    <Header />
    <main class="vh-80">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  box-sizing: border-box;
}

</style>
