<template>
    <div>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Supprimer le token du localStorage
        localStorage.removeItem('token');
  
        // Rediriger l'utilisateur vers la page de connexion ou la page d'accueil
        this.$router.push('/login');
      }
    }
  };
  </script>
  