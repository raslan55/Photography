<template>
  <section class="Section_head">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <h2 class="text-center">{{ SectionName }}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Section_head",

  props: {
    SectionName: String,
  },
};
</script>

<style scoped>
.Section_head {
  padding: 50px;
}
.Section_head h2 {
  color: var(--text-color);
  font-size: 3rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 15px;
  font-family: var(--Main-font);
}
</style>
