<template>
    <div>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>  

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_DEV_CONNEXION
  export default {
    data() {
      return {
        username: '',
        password: ''  
      };
    },
    methods: {
      async login() {
          try {
    const response = await fetch(`${BACKEND_URL}api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: this.username,
        password: this.password 
      })
    });
    if (!response.ok) {
      throw new Error("Failed to log user");
    }
  const API_RESPONSE = await response.json()
          // Stocker le token dans localStorage
          localStorage.setItem('token', API_RESPONSE.token);
  
          // Rediriger l'utilisateur ou faire autre chose après la connexion réussie
          this.$router.push('/admin/drone');
        } catch (error) {
          console.error('Login error:', error);
        }
      }
    }
  };
  </script>
  