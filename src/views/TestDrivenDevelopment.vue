<template>
  <div>
    <h2>TDD in Jest</h2>
    <Rating :maxStars="5" :initialStar="2"></Rating>
  </div>
</template>

<script>
export default {
  components: {
    Rating: () => import('../components/Rating')
  }
}
</script>

<style></style>
