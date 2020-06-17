<template>
  <div>
    <button @click="tab = 'form-one'">Login page</button>
    <button @click="tab = 'form-two'">Sign up page</button>
    <component class="component" :is="currentTab"></component>
    <b-alert variant="success" show>Success Alert</b-alert>
    <b-alert show variant="dark">Dark Alert</b-alert>
    <b-alert show dismissible>
      Dismissible Alert! Click the close button over there <b>&rArr;</b>
    </b-alert>
    <b-alert show variant="success">
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
  </div>
</template>

<script>
import FormOne from "../components/FormOne";
import FormTwo from "../components/FormTwo";
export default {
  components: {
    "form-one": FormOne,
    "form-two": FormTwo
  },
  data() {
    return {
      tab: "form-one"
    };
  },
  computed: {
    currentTab() {
      return this.tab;
    }
  }
};
</script>

<style>
button {
  color: blueviolet;
  background: rgb(191, 243, 211);
}
button:hover {
  background: rgb(252, 252, 252);
}
button:active {
  border: 1px solid black;
}
.component {
  width: 100%;
  padding: 10px;
}
</style>
