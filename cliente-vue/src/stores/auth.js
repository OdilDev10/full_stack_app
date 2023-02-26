import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import VueCookies from 'vue-cookies'


export const useAuthStore = defineStore('auth', () => {
  const isAuthenticated = ref('Token')

  function tokenValue(token) {
    isAuthenticated.value = token
    VueCookies.set("Token", token, 10)
    return VueCookies.get("Token")
  }

  return { isAuthenticated, tokenValue}
})
