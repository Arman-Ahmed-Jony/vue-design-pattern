<template>
  <div>
    login page
    <b-button @click="handleApiCall">test vuex</b-button>
    <b-alert variant="success" show>Success Alert</b-alert>
    <b-alert show variant="dark">Dark Alert</b-alert>
  </div>
</template>

<script>
export default {
  methods: {
    handleApiCall() {
      console.log(this.$store.state.users)
    }
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
