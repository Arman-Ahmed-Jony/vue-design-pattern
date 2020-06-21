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
  color: rgba(47, 255, 75);
  margin: 2px;

  opacity: 0.7;
  font-size: 30px;
}
.star:hover {
  opacity: 1;
}
.active {
  color: rgba(255, 25, 25);

  opacity: 0.7;
}
</style>
