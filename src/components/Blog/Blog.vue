<template>
  <section class="Blog">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2>TOURIST BLOG</h2>
          <p>Our Recent Photos</p>
        </div>
      </div>

      <div class="row">
        <div v-for="(Blog, i) in Blogs" :key="i" class="col-lg-4">
          <div class="card">
            <div class="Blog-img">
              <img
                :src="require(`@/assets/images/${Blog.BLogIMG}`)"
                class="card-img-top img-fluid"
                alt=" {{ Blog.title }}"
              />
            </div>
            <div class="card-body">
              <div class="blog-caption">
                <p>{{ Blog.date }}</p>
                <h3 class="card-text">
                  {{ Blog.title }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Our_Blog",
  data() {
    return {
      Blogs: [
        {
          BLogIMG: "pexels-suliman-sallehi-1540977.jpg",
          id: 1,
          date: "23 DEC, 2020",
          title: "Addiction When Gambling Becomes",
        },
        {
          BLogIMG: "pexels-wallace-chuck-2850286.jpg",
          id: 1,
          date: "23 DEC, 2020",
          title: "Addiction When Gambling Becomes",
        },
        {
          BLogIMG: "pexels-liza-summer-6347947.jpg",
          id: 1,
          date: "23 DEC, 2020",
          title: "Addiction When Gambling Becomes",
        },
      ],
    };
  },
};
</script>

<style scoped>
.Blog {
  padding: 50px;
  background-color: var(--section-back);
}
.Blog h2 {
  font-size: 2rem;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
  line-height: 1.5;
}
.Blog p {
  color: #828fa3;
  text-transform: uppercase;
  font-weight: 300;
  font-family: var(--Main-font);
  line-height: 1.5;
}
.Blog .card {
  background-color: transparent;
  border: 0px;
  border-radius: 0px;
  position: relative;
}
.Blog .card-text {
  font-size: 1.3rem;
  color: var(--second-color);
  text-transform: capitalize;
  font-family: var(--Main-font);
  font-weight: bold;
}
.Blog-img {
  max-width: 100%;
  height: auto;
  max-height: 400px;
}
.Blog .card-text:hover {
  color: var(--Main-color);
  transition: all 0.2s ease-in-out 0s;
  cursor: pointer;
}
.card {
  border: none;
  overflow: hidden;
}
.Blog .card img {
  border-radius: 0px;
  box-shadow: var(--shadow);
}

.blog-caption {
  position: absolute;
  right: 0;
  bottom: -10px;
  padding: 29px 20px 20px 31px;
  width: 95%;
  background: var(--back-color);
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
