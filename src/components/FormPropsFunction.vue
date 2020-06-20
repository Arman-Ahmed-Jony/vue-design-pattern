// in this example we will demonstrate funstion props
<template>
  <div class="form-container">
    name: <input type="text" v-model="name" /> <br /><br />
    email: <input type="text" v-model="email" /><br /><br />
    username: <input type="text" v-model="username" /><br /><br />
    <button @click="handleAction">test fun prop</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      username: ''
    }
  },
  props: {
    handleAction: {
      type: Function
    }
  }
}
</script>

<style scoped>
.form-container {
  width: 300px;
  margin: 0 auto;
  padding: 10px;
  text-align: center;
  border: 3px dotted black;
}
</style>
