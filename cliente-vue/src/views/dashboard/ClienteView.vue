<template>
  <div class="contenedor">
    <div>
      <BarraLateral class="barra-lateral h-100" />
    </div>

    <div class="container">
      <h1 class="text-center">Clientes</h1>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" >Crear</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form @submit="clienteCreate()">
          <div class="mb-3">
            <label for="name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="name" name="name" v-model="name">
          </div>
          <div class="mb-3">
            <label for="correo" class="col-form-label">Correo:</label>
            <input type="email" class="form-control" id="correo" name="correo" v-model="correo">
          </div>
          <div class="mb-3">
            <label for="telefono" class="col-form-label">Telefono:</label>
            <input type="phone" class="form-control" id="telefono" name="telefono" v-model="telefono">
          </div>
          <div class="mb-3">
            <label for="image" class="col-form-label">Image:</label>
                <input type="text" class="form-control" id="image" name="image" v-model="image">
          </div>

          <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-success">Create User</button>
      </div>
        </form>
      </div>

    </div>
  </div>
</div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-3">
        <div class="col" v-for="cliente in respuesta" :key="cliente.id">
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
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                  <!-- <RouterLink
                    :to="{
                      name: 'dashboard-clientes-proyectos',
                      params: { id: cliente.id },
                    }"
                    class="btn btn-sm btn-outline-success"
                  >
                    Continue
                  </RouterLink> -->
                  <RouterLink
                    :to="{
                      name: 'dashboard-clientes-proyectos',
                      params: { id: cliente.id },
                    }"
                    class="btn btn-sm btn-outline-primary"
                  >
                    Proyects
                  </RouterLink>
                  <button
                    @click="clientesDelete(cliente.id)"
                    class="btn btn-sm btn-outline-danger"
                  >
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

const respuesta = ref({});
const respuestaDelete = ref({});

const name = ref("");
const correo = ref("");
const telefono = ref("");
const image = ref("");

const clientes = async () => {
  let peticion = await fetch("http://localhost:3000/api/clientes")
    .then((data) => data.json())
    .then((data) => (respuesta.value = data))
    .catch((error) => console.log(error));
};
clientes();

const clientesDelete = async (id) => {
  alert("FUNCIONO" + id);
  let url = "http://localhost:3000/api/clientes/" + id;
  await fetch(url, {
    method: "DELETE",
  })
    .then((data) => data.json())
    .then((data) => (respuestaDelete.value = data))
    .catch((error) => console.log(error));
  recargarPagina();
};

const clienteCreate = async () => {
  const body = { "correo": correo.value, "telefono": telefono.value, "image": image.value, "name": name.value};
  const url = "http://localhost:3000/api/clientes";

  await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body),
  });
  // recargarPagina();
  console.log(body);
};

const recargarPagina = () => {
  location.reload();
};
</script>
