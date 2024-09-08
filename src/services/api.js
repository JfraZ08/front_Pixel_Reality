// src/services/api.js

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_DEV;

const apiClient = {
  async request(endpoint, options = {}) {
    const url = `${BACKEND_URL}api/${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      const errorText = await response.text();
      const message = `Error: ${response.statusText}. Details: ${errorText}`;
      throw new Error(message);
    }

    // Si la réponse est vide, vous pouvez gérer cela comme une réponse valide (par exemple pour DELETE)
    if (response.status === 204) {
      return; // Aucun JSON à retourner
    }

    return response.json();
  },

  // Gestion des articles
  getArticles() {
    return this.request('articles');
  },
  getArticle(id) {
    return this.request(`articles/${id}`);
  },
  createArticle(data) {
    return this.request('articles', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  updateArticle(id, data) {
    return this.request(`articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  deleteArticle(id) {
    return this.request(`articles/${id}`, {
      method: 'DELETE',
    });
  },

  // Gestion des tags
  getTags() {
    return this.request('tag');
  },
  getTag(id) {
    return this.request(`tag/${id}`);
  },
  createTag(data) {
    return this.request('tag', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  updateTag(id, data) {
    return this.request(`tag/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  deleteTag(id) {
    return this.request(`tag/${id}`, {
      method: 'DELETE',
    });
  },

  // Gestion des catégories
  getCategories() {
    return this.request('category');
  },
  getCategory(id) {
    return this.request(`category/${id}`);
  },
  createCategory(data) {
    return this.request('category', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
  updateCategory(id, data) {
    return this.request(`category/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  },
  deleteCategory(id) {
    return this.request(`category/${id}`, {
      method: 'DELETE',
    });
  },
};

export default apiClient;
