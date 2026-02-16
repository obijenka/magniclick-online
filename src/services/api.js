import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

export const getInspiration = (page = 1, limit = 4) => API.get(`/inspiration?_page=${page}&_per_page=${limit}`);
export const updateLikesCount = (id, newCount) => API.patch(`/inspiration/${id}`, { likes: newCount });

export default API;