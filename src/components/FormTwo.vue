<template>
  <div>
    sign up page
    <b-button variant="outline-primary" @click="handleClick">test</b-button>
    <b-alert show dismissible>
      Dismissible Alert! Click the close button over there <b>&rArr;</b>
    </b-alert>
    <b-alert show variant="success" dismissible>
      <h4 class="alert-heading">Well done!</h4>
      <p>
        Aww yeah, you successfully read this important alert message. This
        example text is going to run a bit longer so that you can see how
        spacing within an alert works with this kind of content.
      </p>
      <hr />
      <p class="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things
        nice and tidy.
      </p>
    </b-alert>
    <!-- {{ apiData }} -->
    <div v-for="(item, index) in apiData" :key="index">
      {{ item.username }} - {{ item.email }} - {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiData: []
    };
  },
  created() {
    this.axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response.data);
        this.apiData = response.data;
      });
  },
  methods: {
    handleClick() {
      this.$store.dispatch("getUsers");

      console.log("test", this.$store.state.count);
    }
  }
};
</script>

<style scoped>
div {
  text-align: left;
}
</style>
