// src/services/api.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3000/api', 
  mode: 'no-cors',
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
