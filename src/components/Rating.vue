<template>
  <div>
    <p>rating component</p>
    <ul>
      <li
        :class="{ active: star <= initialStar }"
        v-for="(star, index) in maxStars"
        :key="index"
        class="star"
      >
        &#9734;
      </li>
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

<style scoped>
li {
  display: inline;
}
ul {
  margin: auto;
  padding: 0;
}
.star {
  color: rgb(47, 255, 75);
  margin: 2px;
  font-size: 30px;
}
.active {
  color: rgb(255, 25, 25);
}
</style>
