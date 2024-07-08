<template>
  <div>
    <h1>Créer un nouvel article</h1>
    <form @submit.prevent="submitForm">
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
      tags: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        if (!this.title || !this.content) {
          console.log('Veuillez remplir tous les champs obligatoires.');
          return;
        }

        const formData = {
          title: this.title,
          content: this.content,
          categories: this.categories ? this.categories.split(',').map(cat => cat.trim()) : [],
          tags: this.tags ? this.tags.split(',').map(tag => tag.trim()) : []
        };

        const response = await axios.post('http://localhost:4000/api/articles', formData);
        console.log('Article créé:', response.data);

        this.title = '';
        this.content = '';
        this.categories = '';
        this.tags = '';

      } catch (error) {
        console.error('Erreur lors de la création de l\'article:', error);
        console.log('Erreur lors de la création de l\'article. Veuillez réessayer plus tard.');
      }
    }
  }
};
</script>
