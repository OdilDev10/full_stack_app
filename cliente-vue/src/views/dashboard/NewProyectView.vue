<template>
    <div class="contenedor">
      <div>
        <BarraLateral class="barra-lateral h-100" />
      </div>
    
      <div class="container">
        <h1 class="text-center">New Proyect</h1>

        
        <form class="form m-4 m-auto w-75" @submit.prevent="newProyectSend">
            <div class="form-group">
                <label for="" class="form-label">Name proyect</label><br>
                <input type="text" name="name" v-model="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="" class="form-label">Name client</label><br>
                <input type="text" name="client" v-model="client" class="form-control">
            </div>
            <div class="form-group">
                <label for="" class="form-label">Technologies</label><br>
                <Select name="technologies" v-model="technologies">
                    <option value="">Chose...</option>
                    <option value="">Python</option>
                    <option value="">JavaScript</option>
                </Select>
            </div>
            <div class="form-group">
                <label for="" class="form-label">Time Stimed</label><br>
                <input type="date" name="timeStimed" v-model="timeStimed" class="form-control">
            </div>

            <div class="form-group ">
                <label for="" class="form-label">Description</label><br>
                <textarea name="description" v-model="description" class="form-control"></textarea>
            </div>

            <div class="form-group mt-3 text-center">
                
                <input type="submit" class="btn btn-success m-auto" name="enviar" >
            </div>
        </form>

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

const newProyectSend = () =>{
    
}

  </script>