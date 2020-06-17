<template>
  <!-- <div>test</div> -->
  <v-btn :text="text" @click="handleClick"></v-btn>
</template>

<script>
import VBtn from "../components/VBtn";
export default {
  components: {
    VBtn
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
