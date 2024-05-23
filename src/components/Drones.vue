<!-- src/components/Drones.vue -->
<template>
    <div>
      <h1>Liste des Drones</h1>
      <ul>
        <li v-for="drone in drones" :key="drone.id">
          {{ drone.modele }} - {{ drone.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import DronesService from '@/services/DronesService';
  
  export default {
    data() {
      return {
        drones: []
      };
    },
    created() {
      this.fetchDrones();
    },
    methods: {
      fetchDrones() {
        console.log('Fetching drones...');
        DronesService.getAllDrones()
          .then(response => {
            console.log('Drones fetched:', response.data);
            this.drones = response.data;
          })
          .catch(error => {
            console.error('Erreur lors de la récupération des drones:', error);
          });
      }
    }
  };
  </script>
  