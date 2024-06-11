// Création d'une instance axios
const instance = axios.create({
    baseURL: 'http://localhost:5000/api'
  })
  
  // Ajouter un intercepteur pour inclure le token dans chaque requête
  
  instance.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config;
  }, error => {
    return Promise.reject(error)
  });  

export default instance;