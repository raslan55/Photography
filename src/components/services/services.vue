<template>
  <section class="services">
    <div class="container">
      <div class="row">
        <div v-for="(card, i) in Cards" :key="i" class="col-lg-4">
          <div class="card">
            <img
              :src="require(`@/assets/images/${card.CardIMG}`)"
              class="card-img-top img-fluid"
              alt="..."
            />
            <div class="card-body">
              <h4>{{ card.Text }}</h4>
              <p class="card-text">
                {{ card.title }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "services",
  data() {
    return {
      Cards: [
        {
          CardIMG: "pexels-cottonbro-4064820.jpg",
          id: 1,
          Text: "Creative Photography",
          title:
            "Some quick example text to build on the card title and make up",
        },
        {
          CardIMG: "pexels-kyle-loftus-3045394.jpg",
          id: 2,
          Text: "Nature Photography",
          title:
            "Some quick example text to build on the card title and make up",
        },
        {
          CardIMG: "pexels-kyle-loftus-2510425.jpg",
          id: 3,
          Text: "Wedding Photography",
          title:
            "Some quick example text to build on the card title and make up",
        },
      ],
    };
  },
};
</script>

<style>
.services {
  padding: 50px;
}

.services .card {
  background-color: transparent;
  border: 0px;
  border-radius: 0px;
}
.services h4 {
  font-size: 2rem;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
  line-height: 1.5;
}
.services .card-text {
  font-size: 1rem;
  color: var(--second-color);
  text-transform: capitalize;
  margin-top: 30px;
  font-family: var(--Main-font);
}
.card {
  border: none;
  overflow: hidden;
}
.services .card img {
  border-radius: 0px;
  box-shadow: var(--shadow);
}

.card img:hover {
  width: 100%;
  transform: scale(1.1);
  -webkit-transition: all 0.5s ease-in-out 0s;
  -moz-transition: all 0.5s ease-in-out 0s;
  -ms-transition: all 0.5s ease-in-out 0s;
  -o-transition: all 0.5s ease-in-out 0s;
  transition: all 0.5s ease-in-out 0s;
}
</style>
