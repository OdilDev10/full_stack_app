<template>
  <header class="p-relative">

    <nav class="navbar navbar-expand-lg bg-dark">
    <a class="navbar-brand" href="#">
      <img
        src="https://www.odilmartinez.com/img/python.png"
        alt="Logo"
        width="30"
        height="30"
      />
      App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav bg-dark w-100 m-0">
        <RouterLink class="navbarLink nav-link" aria-current="page" to="/">Home</RouterLink>
        <RouterLink class="navbarLink nav-link" to="/about">About</RouterLink>
        <RouterLink class="navbarLink nav-link" to="/login">Login</RouterLink>
        <RouterLink class="navbarLink nav-link" to="/register">Register</RouterLink>
        <AuthBoton />
      </div>
    </div>
</nav>

    <!-- <nav class="navbar bg-dark p-fixed">
      <img
        src="https://www.odilmartinez.com/img/python.png"
        alt="Logo"
        width="30"
        height="30"
      />
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span> 
    </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav bg-dark w-100 h-100">
        <RouterLink class="navbarLink nav-link" aria-current="page" to="/">Home</RouterLink>
        <RouterLink class="navbarLink nav-link" to="/about">About</RouterLink>
        <RouterLink class="navbarLink nav-link" to="/login">Login</RouterLink>
        <RouterLink class="navbarLink nav-link" to="/register">Register</RouterLink>
        <AuthBoton />
      </div>
      </div>
    </nav> -->


  </header>
</template>

<script setup>
import AuthBoton from './AuthBoton.vue';


</script>

<style scoped>
nav {
  display: flex;
  height: 50px;
  justify-content: space-between;
  /* padding: 7px; */
  margin: 0;
}
.navbar-nav{
  z-index: 100;
}
/* .p-relative{
  position: relative;
}

.p-fixed{
  position: fixed;
  z-index: 100;
} */

.navbarLink{
  color: #fff;
  border-bottom: none;
  font-weight: 100;
}

nav div {
  display: flex;
  width: 60%;
  align-items: center;
  justify-content: space-evenly;
}
</style>
