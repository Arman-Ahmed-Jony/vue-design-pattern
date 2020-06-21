<template>
  <div class="home">
    <div class="svg-container">
      <vue-svg></vue-svg>
    </div>
    <HelloWorld msg="Arman's Expeditions" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    VueSvg: () => import('../components/VueSVG')
  }
}
</script>
<style>
.svg-container {
  display: flex;

  justify-content: space-around;
  align-content: center;
}
</style>
