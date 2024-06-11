<template>
    <div>
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
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
          const response = await axios.post('http://localhost:5000/api/auth/login', {
            user: this.username,
            password: this.password
          });
  
          // Stocker le token dans localStorage
          localStorage.setItem('token', response.data.token);
  
          // Rediriger l'utilisateur ou faire autre chose après la connexion réussie
          this.$router.push('/admin/drone');
        } catch (error) {
          console.error('Login error:', error);
        }
      }
    }
  };
  </script>
  