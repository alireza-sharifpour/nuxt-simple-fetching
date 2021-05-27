<template>
  <div>
    <div v-if="isLoading">Nuxt is Loading ...</div>
    <div v-else v-for="user in users" :key="user.email">
      <div>
        <div>{{ user.name }}</div>
        <div>{{ user.username }}</div>
        <div>{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.state.users.users;
    },
    isLoading() {
      return this.$store.state.users.isLoading;
    },
    error() {
      return this.$store.state.users.error;
    }
  },
  async mounted() {
    await this.$store.dispatch("users/getUsers");
    console.log("users", this.$store.state.users);
  }
};
</script>
