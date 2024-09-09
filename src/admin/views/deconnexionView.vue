<template>
    <div>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import deconnexion from '@/components/deconnexion/deconnexion'
  export default {
    ...deconnexion
  }
  </script>
  