import { post, get } from './request.js';
export const login = (username, password) => {
  return post('/login', { username, password });
};

export const search = (paging) => {
  return get('/users/', { params: paging });
};
