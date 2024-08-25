//  src/services/api.js

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_DEV

const apiClient = {
  async request(endpoint, options = {}) {
    const response = await fetch(`${BACKEND_URL}/api${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      const message = `Error: ${response.statusText}`;
      throw new Error(message);
    }

    return response.json(message)
  },

  // Gestion des articles
  getArticles() {
    return this.request('/articles');
  },
  getArticle(id) {
    return this.request(`/articles/${id}`);
  },
  createArticle(data) {
    return this.request('/articles', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
  updateArticle(id, data) {
    return this.request(`/articles/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },
  deleteArticle(id) {
    return this.request(`/articles/${id}`, {
      method: 'DELETE'
    });
  },

  // Gestion des catégories
  getCategories() {
    return this.request('/categories');
  },
  createCategory(data) {
    return this.request('/categories', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  // Gestion des tags
  getTags() {
    return this.request('/tags');
  },
  createTag(data) {
    return this.request('/tags', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },
};

export default apiClient;