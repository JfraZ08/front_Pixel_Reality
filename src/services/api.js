// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: '/api', // Utilisez simplement '/api' pour utiliser le proxy
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getDrones() {
    return apiClient.get('/drones');
  },
    sendMail(mailData) {
    return apiClient.post('/mail', mailData);
  },
};
