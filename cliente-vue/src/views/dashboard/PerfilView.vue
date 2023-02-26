
<script setup>
import { ref } from "@vue/reactivity";
import BarraLateral from "../../components/BarraLateral.vue";

const edit = ref("");
const name = ref("");
const role = ref("ADmin");
const link = ref("");
const age = ref("");

</script>


<template>
  <div class="contenedor">
    <div>
      <BarraLateral class="barra-lateral h-100" />
    </div>

    <div class="w-75 mx-auto" v-if="edit == true">
      <h1 class="text-center pb-2 border-bottom">Perfil</h1>

      <img
        src="https://www.odilmartinez.com/img/python.png"
        class="rounded mx-auto"
        alt="User Image"
        width="150"
        height="150"
      />

      <h3>Name Jonh</h3>
      <p>Admin</p>
    </div>

    <div class="w-75 mx-auto" v-else>
      <h1 class="text-center pb-2 border-bottom">Perfil</h1>

      <form action="" class="form w-75 mx-auto text-center">
        
        <figure class="mx-auto">
          <img
        src="https://www.odilmartinez.com/img/python.png"
        class="rounded"
        alt="User Image"
        width="150"
        height="150"
      />
      <figcaption>{{ role }}</figcaption>
        </figure>
        <div class="form-group">
        <label for="name" class="form-label">Username</label>
        <input type="text" name="" id="" v-model="name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="age" class="form-label">Age</label>

        <input type="number" name="age" max="120" min="0" v-model="age" class="form-control" />
      </div>
      <div class="form-group">
        <label for="link" class="form-label">Link GitHub</label>

        <input type="text" name="link" v-model="link" class="form-control" />
      </div>

      <div class="form-group mt-4">

        <button type="button" name="enviar"  class="form-control btn btn-success" >Enviar</button>
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
  
