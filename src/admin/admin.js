// /src/admin/admin.js
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
        console.log('Articles récupérés :', response); // Vérifie les articles ici
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
      console.log('ID catégorie pour article :', categoryId)
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
        await apiClient.updateArticle(this.articleForm._id, this.articleForm);
        this.fetchArticles();
        this.resetArticleForm();
      } catch (error) {
        console.error("Erreur lors de la mise à jour de l'article :", error);
      }
    },
    editArticle(article) {
      console.log('ID article à modifier :', article._id)
      this.articleForm = { ...article };
      this.editingArticle = true;
    },
    async deleteArticle(_id) {  
      console.log('ID article à supprimer : ', _id)
      if (!_id) {
        console.log('ID manquant pour la suppression')
        return;
      } 
      try {
        await apiClient.deleteArticle(_id);
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
        await apiClient.updateTag(this.tagForm._id, this.tagForm);
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
    async deleteTag(_id) {
      try {
        await apiClient.deleteTag(_id);
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
        await apiClient.updateCategory(this.categoryForm._id, this.categoryForm);
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
    async deleteCategory(_id) {
      try {
        await apiClient.deleteCategory(_id);
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