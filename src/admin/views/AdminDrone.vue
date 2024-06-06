<template>
    <div>
        <h2>Ajout d'un nouveau drone</h2>
        <form @submit.prevent="addDrones">
            <div>
                <label for="nom">Nom:</label>
                <input type="text" id="nom" v-model="nom" required /> 
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" v-model="description" required></textarea>
            </div>
            <button type="submit">Ajouter</button>
        </form>
        <p v-if="message">{{ message }}</p>

        <h2>Listes des drones</h2>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="drone in drones" :key="drone.id_drone">
                    <td>{{ drone.nom }}</td>
                    <td>{{ drone.description }}</td>
                    <td>
                        <button @click="deleteDrone(drone.id_drone)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <p v-if="message">{{ message }}</p>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return {
            drones: [],
            nom: '', // variable pour stocker le nom du drone
            description: '', // variable pour stocker la description du drone
            message: '' // variable pour stocker le message à afficher
        };
    },
    methods: {
        async fetchDrones() {
            try {
                const response = await axios.get('http://localhost:3000/api/drones');
                this.drones = response.data;
            } catch (error) {
                console.log('Error lors de la récupération des drones:', error);
            }
        },
        async addDrones() {
            try {
                const response = await axios.post('http://localhost:3000/api/drones', {
                    nom: this.nom,
                    description: this.description
                });

                if(response.status === 201) {
                    this.message = `Drone ajouté avec succès. ID: ${response.data.id_drone}`;
                    this.nom = '';
                    this.description = '';
                    this.fetchDrones(); // Mettre à jour la liste des drones après ajout
                } else {
                    this.message = 'Erreur lors de l\'ajout du drone';
                }
            } catch (error) {
                console.log('Erreur : ', error);
                this.message = 'Erreur lors de l\'ajout du drone';
            }
        },
        async deleteDrone(id_drone){
            try {
                const response = await axios.delete(`http://localhost:3000/api/drones/${id_drone}`);
                if(response.status === 200) {
                    this.message = 'Drone supprimé avec succès';
                    this.fetchDrones(); // Mettre à jour la liste des drones après suppression;
                } else {
                    this.message = 'Erreur lors de la suppression';
                }
            } catch (error) {
                console.error('Erreur lors de la suppression du drone: ', error);
                this.message = 'Erreur lors de la suppression du drone';
            }
        }
    },
    mounted() {
        this.fetchDrones(); // Charger la liste des drones lors du montage du composant
    }
}
</script>
