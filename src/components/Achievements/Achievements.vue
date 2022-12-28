<template>
  <section class="achivment">
    <div class="contanier">
      <div class="row">
        <div class="col-lg-6">
          <h2>
            Take a look <br />
            at our achivment
          </h2>
          <p>Excepteur sint occaecat cupidatat. irure dolor in.</p>
        </div>
        <div v-for="(Achieve, i) in Achievements" :key="i" class="col-lg-3">
          <div class="single-achieve text-center">
            <img
              class="img-fluid"
              :src="require(`@/assets/images/${Achieve.URL}`)"
              alt="{{Achieve.Title }}"
            />
            <p>{{ Achieve.Title }}</p>
            <span>{{ Achieve.date }} </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Achievements",
  data() {
    return {
      Achievements: [
        {
          URL: "brand1.png",
          Title: "BEHANCE AWARD",
          date: "PRIZE 2019",
        },
        {
          URL: "brand2.png",
          Title: "BEHANCE AWARD",
          date: "PRIZE 2019",
        },
        {
          URL: "brand2.png",
          Title: "BEHANCE AWARD",
          date: "PRIZE 2019",
        },
        {
          URL: "brand3.png",
          Title: "BEHANCE AWARD",
          date: "PRIZE 2019",
        },
        {
          URL: "brand4.png",
          Title: "BEHANCE AWARD",
          date: "PRIZE 2019",
        },
        {
          URL: "brand5.png",
          Title: "BEHANCE AWARD",
          date: "PRIZE 2019",
        },
      ],
    };
  },
};
</script>

<style scoped>
.achivment {
  padding: 50px;
}

.achivment h2 {
  font-size: 3rem;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 17px;
  line-height: 1.3;
  font-family: var(--Main-font);
}
.achivment p {
  color: var(--text-color);
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.2;
  font-family: var(--Main-font);
  margin-bottom: 30px;
}

.single-achieve {
  border: 1px solid #2e2e2e;
  padding: 50px 0 50px;
  margin-bottom: 30px;
}
.single-achieve p {
  color: var(--text-color);
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: var(--Main-font);
  margin: 0;
}
.single-achieve span {
  color: var(--text-color);
  text-transform: capitalize;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.2;
  font-family: var(--Main-font);
  margin: 0;
}

.single-achieve img {
  margin-bottom: 30px;
}
</style>
