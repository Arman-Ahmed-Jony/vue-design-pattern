<template>
  <div class="nav-container">
    <div class="logo">{{ logo }}</div>
    <ul>
      <li v-for="(link, index) in navLinks" :key="index">
        <router-link :to="link.to">{{ link.name }}</router-link>
      </li>
    </ul>
    <div class="button-container">
      <button
        class="social-buttons"
        :style="button"
        v-for="(button, index) in navButtons"
        :key="index"
      >
        {{ button.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logo: {
      type: String
    },
    navLinks: {
      type: Array,
      required: true
    },
    navButtons: {
      type: Array
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.logo {
  padding: 2px 10px;
  color: #41b883;
  font-size: 30px;
  font-weight: 700;
  border: 1px solid #41b883;
  border-radius: 9px;
  margin: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  transition: background 200ms linear, color 500ms linear;
}
.logo:hover {
  color: aliceblue;
  background: #41b883;
  cursor: default;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  background: #34495e;
  align-items: center;
}
.nav-container ul {
  list-style: none;
}
.nav-container ul li {
  display: inline-block;
  margin: 2px;
}
.nav-container ul li a {
  font-weight: 500;
  color: #41b883;
  font-size: 16px;
  text-decoration: none;
  padding: 6px 6px;
}
.nav-container ul li a:hover {
  background: #41b88398;
  color: aliceblue;
  border-radius: 5px;
}
.nav-container ul li a.router-link-exact-active {
  border-radius: 5px;
  background: #41b883;
  color: aliceblue;
}
.social-buttons {
  outline: none;
  border: none;
  color: aliceblue;
  font-size: 22px;
  background: #41b883;
  padding: 0;
  height: 30px;
  text-align: center;
  line-height: 0px;
  width: 30px;
  margin: 2px;
  border-radius: 50%;
}
</style>
