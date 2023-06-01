import axios from 'axios';

//https://api.themoviedb.org/3/movie/now_playing?api_key=f22a2d131c98d4e27ed1e02951924b36&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})
  
export default api;