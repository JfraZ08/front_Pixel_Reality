// src/services/droneService.js
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL_DEV;
const API_URL = `${BACKEND_URL}/api/drones`;


class DroneService {
  getAllDrones() {
    return axios.get(API_URL);
  }
}

export default new DroneService();
