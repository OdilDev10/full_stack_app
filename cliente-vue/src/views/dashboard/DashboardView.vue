<script setup>
import BarraLateral from '../../components/BarraLateral.vue';

</script>

<template>
 <div class="contenedor">


  <div >
    <BarraLateral class="barra-lateral h-100"/>
  </div>

  <div class="container">
    <h1 class="text-center">Bienvenido</h1>


    <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div>

  </div>

 </div>
</template>


<style scoped>
.contenedor{
  min-height: 200vh;
  display: flex;
}

.barra-lateral{
  height: 100%;
}
</style>