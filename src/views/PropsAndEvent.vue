<template>
  <div>
    <!-- <div>test</div> -->
    <v-btn :text="text" @click="handleClick"></v-btn><br /><br />
    <h2>form component</h2>
    <Form text="input field"></Form>
    <h2>form with function props</h2>
    <form-props-function></form-props-function>
  </div>
</template>

<script>
import VBtn from "../components/VBtn";
export default {
  components: {
    VBtn,
    Form: () => import("../components/Form"),
    FormPropsFunction: () => import("../components/FormPropsFunction")
  },
  data() {
    return {
      count: 0,
      text: "initial text"
    };
  },
  methods: {
    handleClick() {
      this.text = `button clicked ${++this.count}`;
    }
  }
};
</script>

<style></style>
