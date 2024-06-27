<template>
  <div>
    <h1>Liste des articles</h1>
    <div v-if="articles.length">
      <div v-for="article in articles" :key="article.article_id" class="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
        <img v-if="article.image_url" :src="article.image_url" alt="Image de l'article">
        <p>Créé le: {{ new Date(article.created_at).toLocaleString() }}</p>
        <button @click="showEditModal(article)">Modifier</button>
        <button @click="deleteArticle(article.article_id)">Supprimer</button>
      </div>
    </div>
    <div v-else>
      <p>Aucun article trouvé.</p>
    </div>
    <EditArticleModal v-if="showModal" :show="showModal" :article="selectedArticle" @close="showModal = false" @update="updateArticle"/>
  </div>
</template>


<script>
import axios from 'axios';
import EditArticleModal from '../components/articles/EditArticleModal.vue';

export default {
  components: {
    EditArticleModal
  },
  data() {
    return {
      articles: [],
      showModal: false,
      selectedArticle: null
    };
  },
  created() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get('http://localhost:4000/api/articles');
        this.articles = response.data.map(article => ({
          ...article,
          // Ajouter l'URL de l'image si elle est disponible
          image_url: article.image ? `http://localhost:4000/${article.image}` : null
        }));
      } catch (error) {
        console.error('Erreur lors de la récupération des articles:', error);
      }
    },
    async deleteArticle(articleId) {
      try {
        await axios.delete(`http://localhost:4000/api/articles/${articleId}`);
        this.articles = this.articles.filter(article => article.article_id !== articleId);
      } catch (error) {
        console.error('Erreur lors de la suppression de l\'article:', error);
      }
    },
    showEditModal(article) {
      this.selectedArticle = { ...article };
      this.showModal = true;
    },
    async updateArticle(updatedArticle) {
      try {
        await axios.put(`http://localhost:4000/api/articles/${updatedArticle.article_id}`, updatedArticle);
        const index = this.articles.findIndex(article => article.article_id === updatedArticle.article_id);
        if (index !== -1) {
          this.$set(this.articles, index, updatedArticle);
        }
        this.showModal = false;
      } catch (error) {
        console.error('Erreur lors de la mise à jour de l\'article:', error);
      }
    }
  }
};
</script>


<style>
.article {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
  position: relative;
}

.article button {
  background-color: #FFD400;
  border: none;
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.article button:hover {
  background-color: #e6b800;
}
</style>
