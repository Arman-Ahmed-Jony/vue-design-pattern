<template>
  <div>
    <!-- <div>test</div> -->
    <v-btn :text="text" @click="handleClick"></v-btn>
    <Form></Form>
  </div>
</template>

<script>
import VBtn from "../components/VBtn";
export default {
  components: {
    VBtn,
    Form: () => import("../components/Form")
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
