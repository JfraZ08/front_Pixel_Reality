// src/services/droneService.js
import axios from 'axios';

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const API_URL = `${BACKEND_URL}+/drones`;


class DroneService {
  getAllDrones() {
    return axios.get(API_URL);
  }
}

export default new DroneService();
