<template>
  <Nav_bar />
  <router-view />
  <Footeer />
</template>

<script>
import Nav_bar from "@/components/Navbar/Navbar.vue";
import Footeer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Nav_bar,
    Footeer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap");

:root {
  --Main-font: "Poppins", sans-serif;
  --Main-color: #f04e3c;
  --back-color: #081213;
  --text-color: #fff;
  --second-color: #d3d3d4;
  --shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  --section-back: #101112;
}

#app {
  background-color: var(--back-color);
}
a {
  text-decoration: none !important;
}
li {
  list-style: none;
}
</style>
