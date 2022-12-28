<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }"
        ><span>photo </span>grapher
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="icon"> <font-awesome-icon icon="fa-solid fa-bars" /></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Home' }" exact>
              home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'About' }">
              about
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Gallery' }">
              gallery
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Services' }">
              services
            </router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Blog' }">
              Blog
            </router-link>
          </li> -->
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Contact' }">
              contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav_bar",
};
</script>

<style scoped>
.nav-item .nav-link {
  color: var(--text-color);
  font-weight: 400;
  padding: 39px 10px;
  display: block;
  font-size: 1rem;
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
  text-transform: capitalize;
  position: relative;
  margin: 0 23px;
  font-family: var(--Main-font);
}
.navbar-brand span {
  color: var(--Main-color);
  text-transform: capitalize;
}
.navbar-brand {
  color: var(--text-color);
  text-transform: capitalize;
}
.icon svg {
  color: var(--text-color);
  font-size: 1.5rem;
}
.navbar-toggler {
  border: 0px;
}
.navbar-toggler:focus {
  box-shadow: var(--shadow);
}
.nav-item .nav-link:hover,
.navbar-brand:hover {
  color: var(--Main-color);
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
}
.router-link-exact-active {
  color: var(--Main-color) !important;
}
.sticky-top {
  background-color: var(--back-color);
  -webkit-box-shadow: 3px 0px 5px -4px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 0px 5px -4px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 0px 5px -4px rgba(0, 0, 0, 0.75);
}
</style>
