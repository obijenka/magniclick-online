import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 10000,
});

export const getInspiration = () => API.get('/inspiration');
export const updateLikesCount = (id, newCount) => API.patch(`/inspiration/${id}`, { likes: newCount });

export default API;