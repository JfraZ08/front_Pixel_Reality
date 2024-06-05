<script>
import axios from "axios";

export default {
    data(){
        return {
            nom: '', // variable pour stocker le nom du drone
            description: '', // variable pour stocker la description du drone
            message: '' // variable pour stocker le message à afficher
        };
    },
    methods: {
        async addDrones() {
            try {
                const response = await axios.post('http://localhost:3000/api/drones', {
                    nom: this.nom,
                    description: this.description
                });

                if(response.status === 201) {
                    this.message = `Drone ajouté avec succès. ID: ${response.data.id_drone}`
                    this.nom = '',
                    this.description = '';
                }

                else  {
                    this.message = 'Erreur lors de l\'ajout du drone';
                }
            } catch (error) {
                console.log('Erreur : ', error)
                this.message = 'Erreur lors de l\'ajout du drone';

            }
        }
    }
}
</script>
<template>
    <h2>Ajout d'un nouveau drone</h2>
    <form @submit.prevent="addDrones">
    <div>
        <label for="nom">Nom;</label>
        <input type="text" id="nom" v-model="nom" required /> 
    </div>
    <div>
        <label for="description">Description:</label>
        <textarea id="description" v-model="description" required></textarea>
    </div>
    <button type="submit">Ajouter</button>
    </form>
    <p v-if="message">{{ message }}</p>
</template>