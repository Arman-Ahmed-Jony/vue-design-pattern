// in this example we will demonstrate funstion props
<template>
  <div class="form-container">
    name: <input type="text" v-model="normalizedText" /> <br /><br />
    email: <input type="text" v-model="normalizedText" /><br /><br />
    username: <input type="text" v-model="normalizedText" /><br /><br />
    <button>test</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textCopy: this.text
    };
  },
  props: {
    text: {
      type: String
    }
  },
  computed: {
    normalizedText: {
      get() {
        return this.textCopy;
      },
      set(val) {
        this.textCopy = val;
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  width: 40vw;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  border: 3px dotted black;
}
</style>
