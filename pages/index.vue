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
  data() {
    return {
      users: [],
      isLoading: false,
      error: undefined
    };
  },
  mounted() {
    this.isLoading = true;
    this.$store
      .dispatch("users/getUsers")
      .then(res => {
        this.users = res.data;
        console.log("Users", res);
        this.isLoading = false;
      })
      .catch(err => {
        this.error = err.response;
        this.isLoading = false;
      });
  }
};
</script>
