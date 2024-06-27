<template>
    <div class="modal" v-if="show">
      <div class="modal-content">
        <span class="close" @click="$emit('close')">&times;</span>
        <h2>Edit Article</h2>
        <form @submit.prevent="submitEdit">
          <label for="title">Title:</label>
          <input type="text" id="title" v-model="article.title" required>
  
          <label for="content">Content:</label>
          <textarea id="content" v-model="article.content" required></textarea>
  
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    props: {
      show: Boolean,
      article: Object
    },
    methods: {
      async submitEdit() {
        try {
          await axios.put(`http://localhost:4000/api/articles/${this.article.article_id}`, this.article);
          this.$emit('update', this.article);
          this.$emit('close');
        } catch (error) {
          console.error('Erreur lors de la modification de l\'article:', error);
        }
      }
    }
  };
  </script>
  
  <style>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
  }
  
  .modal-content {
    background-color: #fefefe;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 600px;
    position: relative;
  }
  
  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  </style>
  