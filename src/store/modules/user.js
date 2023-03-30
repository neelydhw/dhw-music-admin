import { getToken, removeToken, setToken } from '../../utils/auth';
import { login } from '../../api/user';

const state = () => ({
  nickname: '',
  token: getToken(),
  username: '',
  roles: [],
});

// getters
const getters = {
  nicknameFirstWord: (state) => {
    return state.nickname.slice(0, 1);
  },
};

const actions = {
  // user login
  login({ commit }, { username, password }) {
    return new Promise((resolve, reject) => {
      login(username.trim(), password)
        .then((response) => {
          const authorization = response.headers['authorization'];
          commit('SET_TOKEN', authorization);
          setToken(authorization);
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
    commit('SET_ROLES', []);
    removeToken();
  },
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
