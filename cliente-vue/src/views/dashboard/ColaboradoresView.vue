<template>
    <div class="contenedor">
      <div>
        <BarraLateral class="barra-lateral h-100" />
      </div>

      <div >
        <h1 class="text-center pb-2 border-bottom">Colaboradores</h1>    
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
          <div class="col" v-for="colaborador in respuesta" :key="colaborador.id">
            <div class="card shadow-sm">
              <img :src="colaborador.image" :alt="colaborador.username" />
              <div class="card-body">
                <p class="card-text">
              
                  <b>id: {{colaborador.id}} {{colaborador.username}}</b>

                  telefono: {{colaborador.telefono}}<br/>
                  github: {{colaborador.github}}<br/>

                  <i>Creado: {{ colaborador.created_at }}</i><br/>
                  <i>Actualizado: {{ colaborador.updated_at }}</i><br/>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Finished
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



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
  import { ref } from "@vue/reactivity";
import BarraLateral from "../../components/BarraLateral.vue";

  
const respuesta = ref({})
const getColaborador = async () =>{
    let peticion = await fetch('http://localhost:3000/api/colaboradores')
    .then(data => data.json())
    .then(data => respuesta.value = data)
    .catch(error => console.log(error))
}
getColaborador()

  </script>