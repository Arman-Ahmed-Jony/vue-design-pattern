// in this example we will demonstrate funstion props
<template>
  <div>
    input: <input type="text" v-model="normalizedText" />
    <button>test</button>
    <br />
    * example above we have used computed setter getter. remember, we should
    avoid mutating props directily
  </div>
</template>

<script>
export default {
  data() {
    return {
      textCopy: this.text
    }
  },
  props: {
    text: {
      type: String
    }
  },
  computed: {
    normalizedText: {
      get() {
        return this.textCopy
      },
      set(val) {
        this.textCopy = val
      }
    }
  }
}
</script>

<style></style>
