<template>
  <div class="contenedor">
    <div>
      <BarraLateral class="barra-lateral h-100" />
    </div>

    <div>
      <h1 class="text-center pb-2 border-bottom">Proyectos</h1>


      <!-- <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form
                class="form m-4 m-auto w-75"
                @submit.prevent="newProyectSend"
              >
                <div class="form-group">
                  <label for="" class="form-label">Name proyect</label><br />
                  <input
                    type="text"
                    name="name"
                    v-model="name"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="" class="form-label">Name client</label><br />
                  <input
                    type="text"
                    name="client"
                    v-model="client"
                    class="form-control"
                  />
                </div>
                <div class="form-group">
                  <label for="" class="form-label">Technologies</label><br />
                  <Select name="technologies" v-model="technologies">
                    <option value="">Chose...</option>
                    <option value="">Python</option>
                    <option value="">JavaScript</option>
                  </Select>
                </div>
                <div class="form-group">
                  <label for="" class="form-label">Time Stimed</label><br />
                  <input
                    type="date"
                    name="timeStimed"
                    v-model="timeStimed"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label for="" class="form-label">Description</label><br />
                  <textarea
                    name="description"
                    v-model="description"
                    class="form-control"
                  ></textarea>
                </div>

                <div class="form-group mt-3 text-center">
                  <input
                    type="submit"
                    class="btn btn-success m-auto"
                    name="enviar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
 -->



      
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
          <div class="col" v-for="proyecto in respuesta" :key="proyecto.id">
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
                  <i>Estado: {{ proyecto.estado }}</i
                  ><br />

                  <i>Creado: {{ proyecto.created_at }}</i
                  ><br />
                  <i>Actualizado: {{ proyecto.updated_at }}</i
                  ><br />
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      @click="actualizarEstado('pendiente', proyecto.id)"
                    >
                      Pendiente
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      @click="actualizarEstado('en proceso', proyecto.id)"
                    >
                      Proceso
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm btn-outline-secondary"
                      @click="actualizarEstado('entregado', proyecto.id)"
                    >
                      Entregado
                    </button>
                  </div>
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

const respuesta = ref({});

const clientes = async () => {
  let peticion = await fetch("http://localhost:3000/api/proyectos")
    .then((data) => data.json())
    .then((data) => (respuesta.value = data))
    .catch((error) => console.log(error));
};
clientes();

const actualizarEstado = async (estado, id) => {
  const body = { estado: estado };
  const url = "http://localhost:3000/api/proyectos/" + id;

  await fetch(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((data) => data.json())
    .then((data) => console.log(data))
    .catch((error) => error);

  recargarPagina();
};

const proyectosCreate = () => {};

const recargarPagina = () => {
  location.reload();
};
</script>
