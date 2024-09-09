<template>
  <div class="login-container">
    <div class="login-form">
      <input v-model="username" placeholder="Username" class="input-field" />
      <input v-model="password" type="password" placeholder="Password" class="input-field" />
      <button @click="login" class="login-button">Login</button>
    </div>
  </div>
</template>

<script>
import UserConnexion from '@/admin/connexion/UserConnexion';
import '@/assets/styles/connexion.css'
export default {
  ...UserConnexion
}
</script>


