export const state = () => ({
  users: {}
});

export const mutations = {
  setUsers(state, users) {
    state.status = "loading";
  }
};

export const actions = {
  async getUsers({ commit }, payload) {
    try {
      const users = await this.$axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit("setUsers", users);
      return Promise.resolve(users);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};
