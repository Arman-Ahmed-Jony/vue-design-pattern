<template>
  <button @click="$emit('click')">{{ text }}</button>
</template>

<script>
export default {
  name: 'v-btn',
  props: {
    text: String
  }
}
</script>

<style></style>
