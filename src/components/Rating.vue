<template>
  <div>
    <p>rating component</p>
    <ul>
      <li
        :class="{ active: star <= initialStar }"
        v-for="(star, index) in maxStars"
        :key="index"
        class="star"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxStars: {
      type: Number
    },
    initialStar: {
      type: Number
    }
  }
}
</script>

<style></style>
