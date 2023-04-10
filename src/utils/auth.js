import Cookies from 'js-cookie';

const TokenKey = 'dhw-token';
const UserKey = 'current-user';

export function getCurrentUser() {
  const user = Cookies.get(UserKey);
  return user === undefined ? null : JSON.parse(user);
}

export function setCurrentUser(currentUser) {
  return Cookies.set(UserKey, JSON.stringify(currentUser));
}

export function removeCurrentUser() {
  Cookies.remove(UserKey);
}

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  Cookies.remove(TokenKey);
}
