import { auth, providers } from '../modules/firebase';

export const state = () => ({
  loading: true,
  loggingIn: false,
  initialized: false,
  user: null,
});

export const getters = {
  /** 読み込み中かどうか */
  loading: (state) => state.loading,

  /** 初期化が終わっているかどうか */
  initialized: (state) => state.initialized,

  /** ログイン中かどうか */
  loggingIn: (state) => state.loggingIn,

  /** ログイン済かどうか */
  loggedIn: (state) => state.user !== null,

  /** User情報 */
  user: (state) => state.user,

  /** UID */
  uid: (state) => (state.user !== null ? state.user.uid : null),
};

export const mutations = {
  startLoading: (state) => {
    state.loading = true;
  },

  finishLoading: (state) => {
    state.loading = false;
  },

  setUser: (state, rawUser) => {
    if (rawUser === null) {
      state.user = null;
      return;
    }

    const user = {};
    Object.entries(rawUser)
      .filter(([key]) => ['uid', 'photoURL'].includes(key))
      .forEach(([key, value]) => {
        user[key] = value;
      });
    state.user = user;
  },

  finishInitialize: (state) => {
    state.initialized = true;
  },

  startLoggingIn: (state) => {
    state.loggingIn = true;
  },

  finishLoggingIn: (state) => {
    state.loggingIn = false;
  },
};

export const actions = {
  initialize({ commit, getters }) {
    if (getters.initialized) {
      return;
    }
    commit('startLoading');

    auth.onAuthStateChanged(
      (user) => {
        commit('setUser', user !== null ? user : null);
        commit('finishLoading');
      },
      () => {
        commit('setUser', null);
        commit('finishLoading');
      }
    );
    commit('finishInitialize');
  },

  async login({ commit }) {
    commit('startLoggingIn');
    try {
      await auth.signInWithPopup(providers.twitter);
    } catch (e) {
      console.error(e);
    }
    commit('finishLoggingIn');
  },

  async logout() {
    try {
      await auth.signOut();
    } catch (e) {
      console.error(e);
    }
  },
};
