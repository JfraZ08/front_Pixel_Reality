<!-- /src/views/ArticlesList.vue-->
<template>
  <div class="articles_list">
    <h1>Liste des articles</h1>
    <div v-if="articles.length">
      <div v-for="article in articles" :key="article._id" class="article">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
        <small>Catégorie : {{ getCategoryName(article.category) }}</small>
      </div>
    </div>
    <div v-else>
      <p>Aucun article disponible pour le moment</p>
    </div>
  </div>
</template>

<script>
import apiClient from "@/services/api";

export default {
  data() {
    return {
      articles: [],
      categories: []
    };
  },
  created() {
    this.fetchArticles();
    this.fetchCategories();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await apiClient.getArticles();
        this.articles = response;
      } catch (error) {
        console.error('Erreur lors de la récupération des articles :', error);
      }
    },
    async fetchCategories() {
      try {
        const response = await apiClient.getCategories();
        this.categories = response;
      } catch (error) {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    },
    getCategoryName(categoryId) {
      const category = this.categories.find(cat => cat.id === categoryId);
      return category ? category.name : 'Non défini';
    }
  }
};
</script>

<style scoped>
.articles-list {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

.article {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
}

h2 {
  margin-top: 0;
}

@media (max-width: 768px) {
  .articles-list {
    padding: 10px;
  }

  .article {
    padding: 10px;
  }
}



</style>