<template>
  <div>
    sign up page
    <b-button variant="outline-primary" @click="handleClick">test</b-button>
    <b-button variant="outline-primary" @click="handleApiCall"
      >test api call</b-button
    >
    <!-- <b-alert show dismissible>
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
    </b-alert> -->
    <!-- {{ apiData }} -->
    <div v-for="(item, index) in getUsers" :key="index">
      {{ item.username | userNameHashTag }} - {{ item.email }} - {{ item.name }}
    </div>
    {{ getCount }}

    <br />
    <!-- {{ getUsers }} -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      apiData: []
    }
  },
  created() {},
  filters: {
    userNameHashTag: value => `# ${value}`
  },
  methods: {
    handleClick() {
      this.$store.dispatch('getCount')
      this.getUsers.pop()
      console.log(...this.getUsers)
    },
    handleApiCall() {
      this.$store.dispatch('getUsers', this.apiData)
    }
  },
  computed: {
    ...mapGetters(['getCount', 'getUsers'])
  }
}
</script>

<style scoped>
div {
  text-align: left;
}
</style>
