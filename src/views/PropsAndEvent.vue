<template>
  <div>
    <!-- <div>test</div> -->
    <v-btn :text="text" @click="handleClick"></v-btn><br /><br />
    <h2>form component</h2>
    <Form text="input field"></Form>
    <h2>form with function props</h2>
    <form-props-function :handleAction="clickEventProps"></form-props-function>
    <!-- <button @click="clickEventProps">action</button> -->
    <br />
    <input
      ref="fileInput"
      type="file"
      @change="onFileChange"
      enctype="multipart/form-data"
    />
    <img :src="url" alt="" width="200" />
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
      text: "initial text",
      url: null
    };
  },
  methods: {
    handleClick() {
      this.text = `button clicked ${++this.count}`;
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    clickEventProps() {
      console.log("test");
    }
  }
};
</script>

<style></style>
