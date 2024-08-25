<template>
    <div class="admin-drone">
      <h1>Gestion des Articles, Tags et Catégories</h1>
      
      <!-- Tableau pour les Articles -->
      <section>
        <h2>Articles</h2>
        <form @submit.prevent="handleArticleSubmit">
          <input type="text" v-model="articleForm.title" placeholder="Titre de l'article" required />
          <textarea v-model="articleForm.content" placeholder="Contenu de l'article" required></textarea>
          <select v-model="articleForm.category">
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
          <button type="submit">{{ editingArticle ? 'Modifier' : 'Ajouter' }} l'article</button>
        </form>
        
        <!-- Tableau pour lister les articles -->
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Contenu</th>
              <th>Catégorie</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="article in articles" :key="article.id">
              <td>{{ article.title }}</td>
              <td>{{ article.content }}</td>
              <td>{{ getCategoryName(article.category) }}</td>
              <td>
                <button @click="editArticle(article)">Éditer</button>
                <button @click="deleteArticle(article.id)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <!-- Tableau pour les Tags -->
      <section>
        <h2>Tags</h2>
        <form @submit.prevent="handleTagSubmit">
          <input type="text" v-model="tagForm.name" placeholder="Nom du tag" required />
          <button type="submit">{{ editingTag ? 'Modifier' : 'Ajouter' }} le tag</button>
        </form>
        
        <!-- Tableau pour lister les tags -->
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="tag in tags" :key="tag.id">
              <td>{{ tag.name }}</td>
              <td>
                <button @click="editTag(tag)">Éditer</button>
                <button @click="deleteTag(tag.id)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
  
      <!-- Tableau pour les Catégories -->
      <section>
        <h2>Catégories</h2>
        <form @submit.prevent="handleCategorySubmit">
          <input type="text" v-model="categoryForm.name" placeholder="Nom de la catégorie" required />
          <button type="submit">{{ editingCategory ? 'Modifier' : 'Ajouter' }} la catégorie</button>
        </form>
        
        <!-- Tableau pour lister les catégories -->
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{ category.name }}</td>
              <td>
                <button @click="editCategory(category)">Éditer</button>
                <button @click="deleteCategory(category.id)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </template>
  
  
  <script>
  import apiClient from '@/services/api'; // Assurez-vous que ce chemin est correct
  
  export default {
    data() {
      return {
        articles: [],
        tags: [],
        categories: [],
        articleForm: {
          id: null,
          title: '',
          content: '',
          category: ''
        },
        tagForm: {
          id: null,
          name: ''
        },
        categoryForm: {
          id: null,
          name: ''
        },
        editingArticle: false,
        editingTag: false,
        editingCategory: false
      };
    },
    created() {
      this.fetchArticles();
      this.fetchTags();
      this.fetchCategories();
    },
    methods: {
      async fetchArticles() {
        try {
          const response = await apiClient.getArticles();
          this.articles = response;
        } catch (error) {
          console.error("Erreur lors de la récupération des articles :", error);
        }
      },
      async fetchTags() {
        try {
          const response = await apiClient.getTags();
          this.tags = response;
        } catch (error) {
          console.error("Erreur lors de la récupération des tags :", error);
        }
      },
      async fetchCategories() {
        try {
          const response = await apiClient.getCategories();
          this.categories = response;
        } catch (error) {
          console.error("Erreur lors de la récupération des catégories :", error);
        }
      },
      getCategoryName(categoryId) {
        const category = this.categories.find(cat => cat.id === categoryId);
        return category ? category.name : 'Non défini';
      },
      handleArticleSubmit() {
        if (this.editingArticle) {
          this.updateArticle();
        } else {
          this.createArticle();
        }
      },
      async createArticle() {
        try {
          await apiClient.createArticle(this.articleForm);
          this.fetchArticles();
          this.resetArticleForm();
        } catch (error) {
          console.error("Erreur lors de la création de l'article :", error);
        }
      },
      async updateArticle() {
        try {
          await apiClient.updateArticle(this.articleForm.id, this.articleForm);
          this.fetchArticles();
          this.resetArticleForm();
        } catch (error) {
          console.error("Erreur lors de la mise à jour de l'article :", error);
        }
      },
      editArticle(article) {
        this.articleForm = { ...article };
        this.editingArticle = true;
      },
      async deleteArticle(id) {
        try {
          await apiClient.deleteArticle(id);
          this.fetchArticles();
        } catch (error) {
          console.error("Erreur lors de la suppression de l'article :", error);
        }
      },
      resetArticleForm() {
        this.articleForm = { id: null, title: '', content: '', category: '' };
        this.editingArticle = false;
      },
      handleTagSubmit() {
        if (this.editingTag) {
          this.updateTag();
        } else {
          this.createTag();
        }
      },
      async createTag() {
        try {
          await apiClient.createTag(this.tagForm);
          this.fetchTags();
          this.resetTagForm();
        } catch (error) {
          console.error("Erreur lors de la création du tag :", error);
        }
      },
      async updateTag() {
        try {
          await apiClient.updateTag(this.tagForm.id, this.tagForm);
          this.fetchTags();
          this.resetTagForm();
        } catch (error) {
          console.error("Erreur lors de la mise à jour du tag :", error);
        }
      },
      editTag(tag) {
        this.tagForm = { ...tag };
        this.editingTag = true;
      },
      async deleteTag(id) {
        try {
          await apiClient.deleteTag(id);
          this.fetchTags();
        } catch (error) {
          console.error("Erreur lors de la suppression du tag :", error);
        }
      },
      resetTagForm() {
        this.tagForm = { id: null, name: '' };
        this.editingTag = false;
      },
      handleCategorySubmit() {
        if (this.editingCategory) {
          this.updateCategory();
        } else {
          this.createCategory();
        }
      },
      async createCategory() {
        try {
          await apiClient.createCategory(this.categoryForm);
          this.fetchCategories();
          this.resetCategoryForm();
        } catch (error) {
          console.error("Erreur lors de la création de la catégorie :", error);
        }
      },
      async updateCategory() {
        try {
          await apiClient.updateCategory(this.categoryForm.id, this.categoryForm);
          this.fetchCategories();
          this.resetCategoryForm();
        } catch (error) {
          console.error("Erreur lors de la mise à jour de la catégorie :", error);
        }
      },
      editCategory(category) {
        this.categoryForm = { ...category };
        this.editingCategory = true;
      },
      async deleteCategory(id) {
        try {
          await apiClient.deleteCategory(id);
          this.fetchCategories();
        } catch (error) {
          console.error("Erreur lors de la suppression de la catégorie :", error);
        }
      },
      resetCategoryForm() {
        this.categoryForm = { id: null, name: '' };
        this.editingCategory = false;
      }
    }
  };
  </script>
  
  
  <style scoped>
  .admin-drone {
    padding: 20px;
  }
  section {
    margin-bottom: 40px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  input, textarea, select {
    margin-bottom: 10px;
  }
  button {
    margin-top: 10px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f4f4f4;
  }
  </style>
  