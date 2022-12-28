<template>
  <section class="Error">
    <div class="text-center">
      <h1 class="text">Error 404</h1>
      <p>this page not found</p>
      <button class="btn" @click="goBack()">Go Home</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Errorview",
  components: {},
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style>
.Error {
  padding: 100px;
}
.text {
  text-transform: uppercase;
  font-family: verdana;
  font-size: 5em;
  font-weight: 700;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgb(16 16 16 / 40%),
    1px 22px 10px rgb(16 16 16 / 20%), 1px 25px 35px rgb(16 16 16 / 20%),
    1px 30px 60px rgb(16 16 16 / 40%);
  margin-bottom: 50px;
}
.Error p {
  font-size: 2rem;
  color: #8a8a8a;
  font-family: var(--Main-font);
  text-transform: capitalize;
  font-weight: 300px;
}
.btn {
  background-color: var(--Main-color);
  color: var(--text-color);
  padding: 15px 20px;
  text-transform: uppercase;
  border-radius: 0px;
  box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
  position: relative;
  font-size: 1.4rem;
  font-weight: 500px;
}
</style>
