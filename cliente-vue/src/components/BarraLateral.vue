<template>
<div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style="width: 200px;">
    <img
    @click="esconder"
        :src="menu"
        :class="barra-escondida"
        class="m-1"
        alt="Logo"
        width="24"
        height="20"
      />
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <RouterLink :to="{name: 'dashboard'}" :class="navSelect" @click="navSelect" value="home" class="nav-link active" aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#home"></use></svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Bienvenida
        </font></font></RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'dashboard-panel'}" :class="navSelect" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#speedometer2"></use></svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Panel
        </font></font></RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'dashboard-colaboradores'}" :class="navSelect" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#table"></use></svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Colaboradores
        </font></font></RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'dashboard-proyectos'}" :class="navSelect" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#grid"></use></svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Proyectos
        </font></font></RouterLink>
      </li>
      <li>
        <RouterLink :to="{name: 'dashboard-clientes'}" :class="navSelect" class="nav-link text-white">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlink:href="#people-circle"></use></svg><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">
          Clientes
        </font></font></RouterLink>
      </li>
    </ul>
    <hr>
   
  </div>


  
</template>

<script setup>
import { computed, ref } from '@vue/runtime-core'
import menu from '../assets/menu.png'


const navSelect = (e) =>{
  console.log(e.getAttribute('class'));
  console.log(e.target);
  console.log(e.target.value);

}

// const navSelect = computed(() =>{

//     return 'bg-danger'
  
//     // return selectNav.value = 'bg-primary' 
// })

const esconder = () => {
    return ''
}

</script>

<style scoped></style>