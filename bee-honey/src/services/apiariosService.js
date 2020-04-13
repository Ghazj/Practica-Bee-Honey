import api from './api.js';

export const fetchApario = () => api.get('/bee_honey/apiaries?beekeeper_id=420');
