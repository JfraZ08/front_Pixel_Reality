<style>
table {
    border-collapse: collapse;
    width: 100%;
    margin: 20px 0;
    font-family: Arial, sans-serif;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

th, td {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
    color: #333;
    font-weight: bold;
}

tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

tbody tr:hover {
    background-color: #f1f1f1;
}

.maj {
    background-color: #4CAF50;
    color: white;
    width: 80px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
}

.maj:hover {
    background-color: #45a049;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.delete {
    background-color: #f44336;
    color: white;
    width: 80px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 5px;
}

.delete:hover {
    background-color: #e31b0c;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.table_edit, .table_delete, .table_name, .table_name_sous, .table_description, .table_description_sous {
    width: 150px;
    max-width: 150px;
    word-wrap: break-word;
}
</style>


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
                    <th class="table_name">Nom</th>
                    <th class="table_description">Description</th>
                    <th class="table_edit">Modifier</th>
                    <th class="table_delete">Supprimer</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="drone in drones" :key="drone.id_drone">
                    <td class="table_name_sous">{{ drone.nom }}</td>
                    <td class="table_description_sous">{{ drone.description }}</td>
                    <td class="table_edit_sous">
                        <button class="maj" @click="editDrone(drone)">Modifier</button>
                    </td>
                    <td class="table_delete_sous">    
                        <button class="delete" @click="deleteDrone(drone.id_drone)">Supprimer</button>
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
