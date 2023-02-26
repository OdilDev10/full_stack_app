<template>
  <div class="my-4">
    <form @submit.prevent="login">
      <h1>LOGIN</h1>

      <div class="alert alert-warning" role="alert"  v-if="message != ''"> 
       <p>{{ message }}</p>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label><br />
        <input type="email" class="form-control" v-model="email" required />
        <!-- v-bind="invalidForm" -->
      </div>
      <div class="form-group">
        <label for="password" class="form-label">Password</label><br />
        <input
          type="password"
          class="form-control"
          v-model="password"
          required
        />
        <!-- v-bind="invalidForm" -->
      </div>
      <button type="submit" class="success">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useAuthStore } from "../stores/auth";

const auth = useAuthStore()

const email = ref("");
const password = ref("");
const message = ref('')

const validateForm = () =>{
  if(email.value == '' || password.value == ''){
    message.value = 'Hay campos vacios'
    return true
  }else{
    return message.value = ''
  }
}

const login = async () => {
  if(validateForm() == true) return
  
  const user = {
    email: email.value,
    password: password.value
  };
  const register = await fetch("http://127.0.0.1:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => auth.tokenValue(data.Token))
    .catch((error) => console.error(error));

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
