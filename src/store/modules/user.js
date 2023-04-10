import {
  getCurrentUser,
  getToken,
  removeCurrentUser,
  removeToken,
  setCurrentUser,
  setToken,
} from '../../utils/auth';
import { createToken } from '../../api/token';
import { me } from '../../api/user';

const state = () => ({
  token: getToken(),
  currentUser: getCurrentUser(),
});

// getters
const getters = {
  nicknameFirstWord: (state) => {
    return state.currentUser ? state.currentUser.nickname.slice(0, 1) : '';
  },
};

const actions = {
  // user login
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      createToken(username.trim(), password)
        .then((token) => {
          commit('SET_TOKEN', token);
          setToken(token);
          resolve();
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  // user logout
  logout({ commit, state, dispatch }) {
    commit('SET_TOKEN', '');
    commit('SET_CURRENT_USER', '');
    removeToken();
    removeCurrentUser();
  },
  fetchCurrentUser({ commit }) {
    return new Promise((resolve, reject) => {
      me()
        .then((currentUser) => {
          commit('SET_CURRENT_USER', currentUser);
          setCurrentUser(currentUser);
          resolve(currentUser);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_CURRENT_USER: (state, currentUser) => {
    state.currentUser = currentUser;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
