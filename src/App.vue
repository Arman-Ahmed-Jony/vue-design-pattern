<template>
  <div id="app">
    <div id="nav">
      <navigation-bar
        :logo="navLink.logo"
        :navLinks="navLink.navLinks"
        :navButtons="navLink.navButtons"
      ></navigation-bar>
    </div>
    <router-view />
  </div>
</template>
<script>
import { navLink } from './assets/navLinks'
export default {
  components: {
    NavigationBar: () => import('./components/NavigationBar')
  },
  data() {
    return {
      navLink
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@500&display=swap');
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Comfortaa', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  margin-bottom: 5px;
}
</style>
