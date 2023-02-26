<template>
    <div class="contenedor">
      <div>
        <BarraLateral class="barra-lateral h-100" />
      </div>

      <div class="container">
        <!-- CLIENTE -->
        <h1 class="text-center pb-2 border-bottom">Perfil Cliente</h1>    

        
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col" v-for="cliente in respuestaCliente" :key="cliente.id">
            <div class="card shadow-sm">
              <img :src="cliente.image" :alt="cliente.name" />
              <div class="card-body">
                <p class="card-text">
                  <b>{{ cliente.id }} {{ cliente.name }}</b>
                  {{ cliente.description }}<br />
                  <i>Creado: {{ cliente.created_at }}</i
                  ><br />
                  <i>Actualizado: {{ cliente.updated_at }}</i
                  ><br />
                </p>
              </div>
            </div>
          </div>

          
        </div>

        
<!-- PROYECTOS -->
<h2 class="text-center">Proyectos Cliente</h2>


        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div
            class="col"
            v-for="proyecto in respuestaProyectos"
            :key="proyecto.id"
          >
            <div class="card shadow-sm">
              <img :src="proyecto.image" alt="" />
              <div class="card-body">
                <p class="card-text">
                  <b>{{ proyecto.id }} {{ proyecto.name }}</b>

                  {{ proyecto.description }}<br />
                  <i>ID Cliente: {{ proyecto.cliente }}</i
                  ><br />
                  <i>ID Encargado: {{ proyecto.encargado }}</i
                  ><br />
                  <i v-if="proyecto.estado == 'pendien'">Estado: {{ proyecto.estado }}</i
                  ><br />
                  <i>Creado: {{ proyecto.created_at }}</i
                  ><br />
                  <i>Actualizado: {{ proyecto.updated_at }}</i
                  ><br />
                </p>

              </div>
            </div>
          </div>

          
        </div>

<!-- ENCARGADOS -->
    <h2 class="text-center">Encargados Cliente</h2>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col" v-for="colaborador in respuestaEncargado" :key="colaborador.id">
            <div class="card shadow-sm">
              <img :src="colaborador.image" :alt="colaborador.username" />
              <div class="card-body">
                <p class="card-text">
              
                  <b>{{colaborador.id}} {{colaborador.username}}</b>

                  {{colaborador.description}}<br/>
                  <i>Creado: {{ colaborador.created_at }}</i><br/>
                  <i>Actualizado: {{ colaborador.updated_at }}</i><br/>
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Continue
                    </button>
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

<script setup>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import BarraLateral from "../../../components/BarraLateral.vue";

const route = useRoute();
const idCliente = route.params.id;
const respuestaCliente = ref({});
const respuestaProyectos = ref({});
const respuestaEncargado = ref({});


const peticion = async () => {
  const url = `http://localhost:3000/api/proyectos/${idCliente}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    respuestaCliente.value = data[0];
    respuestaProyectos.value = data[1];
    respuestaEncargado.value = data[2];

} catch (error) {
    console.error(error);
  }
};

peticion();

// onMounted(() => {
//   peticion();
// });
</script>


     
<style scoped>
.contenedor {
  min-height: 200vh;

  display: flex;
}

.barra-lateral {
  height: 100%;
}
</style>