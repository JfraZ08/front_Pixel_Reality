<!-- /src/admin/views/AdminDrone.vue-->
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
  import '@/assets/styles/Admin.css'
  import admin from '@/admin/admin';

  export default {
  // Utilisez l'opérateur de décomposition pour inclure toutes les options exportées de admin.js
  ...admin,
};
  </script>
  
  
  
  