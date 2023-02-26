<template>
    <div class="contenedor">
      <div>
        <BarraLateral class="barra-lateral h-100" />
      </div>
      
  
      <div class="container">
        <h1 class="text-center pb-2 border-bottom">Settings</h1>
        
      </div>
  
    </div>
  </template>
     
  <style scoped>
  .contenedor {
      min-height: 200vh;
  
    display: flex;
  }
  
  .barra-lateral {
    height: 100%;
  }
  </style>
  
  <script setup>
  import BarraLateral from "../../components/BarraLateral.vue";
  
  </script>