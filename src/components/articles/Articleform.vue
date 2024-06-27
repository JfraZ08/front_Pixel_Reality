<template>
  <div>
    <h1>Créer un nouvel article</h1>
    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <div>
        <label for="title">Titre</label>
        <input type="text" v-model="title" required>
      </div>
      <div>
        <label for="content">Contenu</label>
        <textarea v-model="content" required></textarea>
      </div>
      <div>
        <label for="categories">Catégories</label>
        <input type="text" v-model="categories" placeholder="Séparez les catégories par des virgules">
      </div>
      <div>
        <label for="tags">Tags</label>
        <input type="text" v-model="tags" placeholder="Séparez les tags par des virgules">
      </div>
      <div>
        <label for="image">Image</label>
        <input type="file" @change="onFileChange">
      </div>
      <button type="submit">Ajouter l'article</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      content: '',
      categories: '',
      tags: '',
      image: null
    };
  },
  methods: {
    onFileChange(event) {
      this.image = event.target.files[0];
    },
    async submitForm() {
      try {
        // Validation basique du formulaire
        if (!this.title || !this.content) {
          alert('Veuillez remplir tous les champs obligatoires.');
          return;
        }

        const formData = new FormData();
        formData.append('title', this.title);
        formData.append('content', this.content);
        
        // Gestion des catégories et tags
        if (this.categories) {
          const categoriesArray = this.categories.split(',').map(cat => cat.trim());
          formData.append('categories', JSON.stringify(categoriesArray));
        }
        
        if (this.tags) {
          const tagsArray = this.tags.split(',').map(tag => tag.trim());
          formData.append('tags', JSON.stringify(tagsArray));
        }

        if (this.image) {
          formData.append('image', this.image);
        }

        const response = await axios.post('http://localhost:4000/api/articles', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log('Article créé:', response.data);

        // Réinitialisation du formulaire après soumission réussie
        this.title = '';
        this.content = '';
        this.categories = '';
        this.tags = '';
        this.image = null;

      } catch (error) {
        console.error('Erreur lors de la création de l\'article:', error);
        alert('Erreur lors de la création de l\'article. Veuillez réessayer plus tard.');
      }
    }
  }
};
</script>
