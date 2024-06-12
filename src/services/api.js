// src/services/api.js
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL


const apiClient = axios.create({
  baseURL: BACKEND_URL, 
  mode: 'no-cors',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getDrones() {
    return apiClient.get('/drones');
    }
    };
    
