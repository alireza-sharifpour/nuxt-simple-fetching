export const state = () => ({
  users: []
});

export const mutations = {
  setUsers(state) {
    state.status = "loading";
  }
};

export const actions = {
  async getUsers({ commit }) {
    try {
      const users = await this.$axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      commit("setUsers", users);
      return users;
    } catch (error) {
      return error;
    }
  }
};
