import { get } from './request.js';
export const search = (paging) => {
  return get('/users/', { params: paging });
};

export const me = () => {
  return get('users/me');
};
