export const state = () => ({
  users: [],
  isLoading: false,
  error: undefined
});

export const mutations = {
  SET_USERS(state, payload) {
    state.users = payload;
  },
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  }
};

export const actions = {
  async getUsers({ commit }) {
    commit("SET_LOADING", true);
    try {
      const users = await this.$axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit("SET_USERS", users.data);
      commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_ERROR", error.response);
      commit("SET_LOADING", false);
    }
  }
};
