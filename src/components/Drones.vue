<!-- src/components/Drones.vue -->
<template>
  <div class="componant-drone">
    <ul>
      <li class="drone-item" v-for="drone in drones" :key="drone.id">
        <div class="first">
          <h2>{{ drone.nom }}</h2>
        </div>
        <div class="second">
          <img src="../../public/images/mavic3.jpg" alt="drone mavic 3">
          <p>{{ drone.description }}</p>
        </div>
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
  <style>
  .component-drone {
    width: 100%;
    height: 1000px;
    margin-top: 20px;
  }
  
  .componant-drone ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .drone-item {
    position: relative;
    width: 600px;
    height: 800px;
    margin-bottom: 20px;
  }
  
  .first, .second {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .first h2 {
    z-index: 1;
  }
  
  .second {
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
  }
  
  .componant-drone img {
    width: 300px;
    height: auto;
  }
  </style>
