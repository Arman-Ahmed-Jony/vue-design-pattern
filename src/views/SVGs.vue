<template>
  <div class="svg-container">
    <VueSVG></VueSVG>
    <RocketSVG></RocketSVG>
    <StarSVG></StarSVG>
  </div>
</template>

<script>
export default {
  components: {
    VueSVG: () => import('../components/VueSVG'),
    RocketSVG: () => import('../components/RocketSVG'),
    StarSVG: () => import('../components/StarSVG')
  }
}
</script>

<style>
.svg-container {
  display: flex;
  justify-content: space-around;
}
</style>
