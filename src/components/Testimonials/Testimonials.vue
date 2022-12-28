<template>
  <section class="Testimonial">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="Testimonial-Heading">Testimonial</h2>
          <p class="Testimonial-paragraph">Our Recent Testimonial</p>
        </div>
      </div>
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(Test, i) in Testimonials" :key="i">
          <div class="single-Testimonials text-center">
            <span>
              <font-awesome-icon icon="fa-solid fa-quote-right" />
            </span>
            <p>{{ Test.Text }}</p>
            <div class="Testimonials-caption">
              <div class="Testimonials-img">
                <img
                  :src="require(`@/assets/images/${Test.WriterIMG}`)"
                  alt="{{ Test.Text }} "
                  srcset=""
                />
              </div>
              <div class="Testimonials-writer">
                <h5>{{ Test.WriterNAme }}</h5>
                <p>{{ Test.WriterTitle }}</p>
              </div>
            </div>
          </div></swiper-slide
        >
      </swiper>
    </div>
  </section>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default {
  name: "Testimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Pagination],
    };
  },
  data() {
    return {
      Testimonials: [
        {
          WriterIMG: "edison-profile.jpg",
          id: 1,
          Text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, rem earum. Ipsum quas corrupti sint, sit temporibus corporis obcaecati placeat vero dolore quae eligendi rem iure ad numquam harum amet.",
          WriterNAme: " Mahmoud raslan ",
          WriterTitle: " Chif Photographer",
        },
        {
          WriterIMG: "pexels-fady-hany-1466845.jpg",
          id: 1,
          Text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, rem earum. Ipsum quas corrupti sint, sit temporibus corporis obcaecati placeat vero dolore quae eligendi rem iure ad numquam harum amet.",
          WriterNAme: " Mahmoud raslan ",
          WriterTitle: " Chif Photographer",
        },
        {
          WriterIMG: "french-dp.jpg",
          id: 1,
          Text: " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius, rem earum. Ipsum quas corrupti sint, sit temporibus corporis obcaecati placeat vero dolore quae eligendi rem iure ad numquam harum amet.",
          WriterNAme: " Mahmoud raslan ",
          WriterTitle: " Chif Photographer",
        },
      ],
    };
  },
};
</script>
<style scoped>
.Testimonial {
  padding: 50px;
}
.Testimonials-caption {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.swiper-slide[data-v-7d0712cf] {
  background-color: transparent !important;
}
.Testimonial-Heading {
  font-size: 2rem;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 600;
  line-height: 1.3;
  font-family: var(--Main-font);
}
.Testimonial-paragraph {
  color: var(--text-color);
  text-transform: capitalize;
  font-family: var(--Main-font);
}
.single-Testimonials p {
  color: var(--text-color);
  text-transform: capitalize;
  padding-right: 100px;
  margin-bottom: 50px;
  line-height: 1.5;
  font-family: var(--Main-font);
}
.single-Testimonials span svg {
  font-size: 3rem;
  color: var(--Main-color);
}
.Testimonials-writer h5 {
  font-size: 2rem;
  color: var(--Main-color);
  text-transform: capitalize;
  font-weight: 600;
  line-height: 1.3;
  font-family: var(--Main-font);
}
.Testimonials-img {
  margin-right: 25px;
}

.Testimonials-writer p {
  font-size: 1rem;
  color: var(--text-color);
  text-transform: capitalize;
  font-weight: 300;
  margin-bottom: 17px;
  line-height: 1.3;
  font-family: var(--Main-font);
}
.Testimonials-img {
  width: 80px;
  height: 80px;
}
.Testimonials-img img {
  max-width: 100%;
  border-radius: 50%;
  box-shadow: var(--shadow);
}
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  width: 100%;
}

.swiper-slide:nth-child(2n) {
  width: 100%;
}

.swiper-slide:nth-child(3n) {
  width: 100%;
}
</style>

<!-- -->
