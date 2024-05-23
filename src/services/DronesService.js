// src/services/droneService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/drones';

class DroneService {
  getAllDrones() {
    return axios.get(API_URL);
  }
}

export default new DroneService();
