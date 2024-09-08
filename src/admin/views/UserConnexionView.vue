<template>
    <div>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>  
  import UserConnexion from '@/admin/UserConnexion';
  export default {
    ...UserConnexion
  }
  </script>
