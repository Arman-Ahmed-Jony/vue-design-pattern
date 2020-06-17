/* eslint-disable vue/require-component-is */
<template>
  <div>
    <component :is="currentTab"></component>
    <button @click="tab = 'form-one'">button one</button>
    <button @click="tab = 'form-two'">button two</button>
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

<style></style>
