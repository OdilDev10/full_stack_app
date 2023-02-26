<template>
  <div>
    <form @submit.prevent="register" class="m-auto ">

      <div class="alert alert-warning" role="alert"  v-if="message != ''"> 
       <p>{{ message }}</p>
      </div>

      <h1>Register</h1>
      <div class="form-group">
        <label for="username" class="form-label">Username</label><br />
        <input type="text" class="form-control" v-model="username"  required :class="invalidFormUsername" />
        <!-- v-bind="invalidForm" -->
      </div>
      <div class="form-group">
        <label for="email" class="form-label">Email</label><br />
        <input type="email" class="form-control" v-model="email" required :class="invalidFormEmail" />
        <!-- v-bind="invalidForm" -->
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Password</label><br />
        <input
          type="password"
          class="form-control"
          v-model="password"
          required :class="invalidFormPassword"
        />
        <!-- v-bind="invalidForm" -->
      </div>
      <div class="form-group">
        <label for="confirmPassword" class="form-label">Confirm Password</label
        ><br />
        <input
          type="password"
          class="form-control"
          v-model="confirmPassword"
          required :class="invalidFormPasswordconfim"
        />
        <!-- v-bind="invalidForm" -->
      </div>
      <button type="submit" class="success">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const message = ref('')

const validateForm = () =>{
  if(username.value == '' || email.value == '' || password.value == '' || confirmPassword.value == ''){
    message.value = 'Hay campos vacios'
    return true
  }else{
    return message.value = ''
  }
}
const register = async () => {
  if(validateForm() == true) return

  const body = {"username": username.value, "email": email.value, "password": password.value, "confirmPassword": confirmPassword.value }
  const peticion = await fetch('http://127.0.0.1:3000/api/auth/register', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body)
  })
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
  
};
</script>


<style scoped>
form {
  border: solid 2px #fff;
  border-radius: 10px;
  width: 50%;
  margin: auto;
  height: 60%;
  padding: 10px;
  text-align: center;
}
.rojo {
  color: red;
}
</style>
