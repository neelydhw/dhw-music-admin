import { post } from './request.js';

export const createToken = (username, password) => {
  return post('/tokens', { username, password });
};
