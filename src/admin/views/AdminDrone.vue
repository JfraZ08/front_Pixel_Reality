<template>
    <div>
        <h2>Ajout d'un nouveau drone</h2>
        <form @submit.prevent="addOrUpdateDrone">
            <div>
                <label for="nom">Nom:</label>
                <input type="text" id="nom" v-model="nom" required /> 
            </div>
            <div>
                <label for="description">Description:</label>
                <textarea id="description" v-model="description" required></textarea>
            </div>
            <button type="submit">{{ isEdit ? 'Mettre à jour' : 'Ajouter' }}</button>
        </form>
        <p v-if="message">{{ message }}</p>

        <h2>Listes des drones</h2>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="drone in drones" :key="drone.id_drone">
                    <td>{{ drone.nom }}</td>
                    <td>{{ drone.description }}</td>
                    <td>
                        <button @click="editDrone(drone)">Modifier</button>
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
            nom: '',
            description: '',
            message: '',
            isEdit: false,
            editId: null
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
        async addOrUpdateDrone() {
            if (this.isEdit) {
                // Mise à jour du drone
                try {
                    const response = await axios.put(`http://localhost:3000/api/drones/${this.editId}`, {
                        nom: this.nom,
                        description: this.description
                    });
                    if(response.status === 200) {
                        this.message = 'Drone mis à jour avec succès';
                        this.nom = '';
                        this.description = '';
                        this.isEdit = false;
                        this.editId = null;
                        this.fetchDrones();
                    } else {
                        this.message = 'Erreur lors de la mise à jour du drone';
                    }
                } catch (error) {
                    console.log('Erreur : ', error);
                    this.message = 'Erreur lors de la mise à jour du drone';
                }
            } else {
                // Ajout d'un nouveau drone
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
        },
        editDrone(drone) {
            this.nom = drone.nom;
            this.description = drone.description;
            this.isEdit = true;
            this.editId = drone.id_drone;
        }
    },
    mounted() {
        this.fetchDrones(); // Charger la liste des drones lors du montage du composant
    }
}
</script>
