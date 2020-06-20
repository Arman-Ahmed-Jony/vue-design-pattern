<template>
  <div>
    <b-button variant="outline-primary" @click="tab = 'form-one'"
      >Login page</b-button
    >
    <b-button variant="outline-primary" @click="tab = 'form-two'"
      >Sign up page</b-button
    >
    <!-- <button @click="tab = 'form-one'">Login page</button>
    <button @click="tab = 'form-two'">Sign up page</button> -->
    <component class="component" :is="currentTab"></component>
  </div>
</template>

<script>
import FormOne from '../components/FormOne'
import FormTwo from '../components/FormTwo'
export default {
  components: {
    'form-one': FormOne,
    'form-two': FormTwo
  },
  data() {
    return {
      tab: 'form-one'
    }
  },
  computed: {
    currentTab() {
      return this.tab
    }
  }
}
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
