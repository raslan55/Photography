<template>
  <section class="Gallery">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="gallery-caption">
            <h3>Check My Gallery</h3>
            <p>NATURE PHOTOGRAPHY</p>
          </div>
        </div>
      </div>
      <swiper
        :effect="'coverflow'"
        :grabCursor="true"
        :centeredSlides="true"
        :slidesPerView="'auto'"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :pagination="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(Slide, index) in Slides" :key="index">
          <img :src="require(`@/assets/images/${Slide.URL}`)" />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Import Swiper styles
import "swiper/css";

export default {
  name: "Gallery",

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },

  data() {
    return {
      Slides: [
        {
          URL: "pexels-eren-li-7241413.jpg",
          Title: "Creative Photography",
          caption: "loremloremloremloremloremloremlorem",
        },
        {
          URL: "pexels-george-milton-7014337.jpg",
          Title: "Creative Photography",
          caption: "loremloremloremloremloremloremlorem",
        },
        {
          URL: "pexels-george-milton-7014405.jpg",
          Title: "Creative Photography",
          caption: "loremloremloremloremloremloremlorem",
        },
        {
          URL: "pexels-liza-summer-6347974.jpg",
          Title: "Creative Photography",
          caption: "loremloremloremloremloremloremlorem",
        },
        {
          URL: "pexels-michael-burrows-7129662.jpg",
          Title: "Creative Photography",
          caption: "loremloremloremloremloremloremlorem",
        },
        {
          URL: "pexels-teona-swift-6913727.jpg",
          Title: "Creative Photography",
          caption: "loremloremloremloremloremloremlorem",
        },
      ],
    };
  },
};
</script>

<style>
.Gallery {
  background-color: var(--section-back);
}
.swiper {
  width: 100%;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 400px;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
.swiper-slide img {
  display: block;
  width: 100%;
}

.gallery-caption {
  margin-top: 30px;
  padding: 30px;
}
.gallery-caption h3 {
  font-size: 25px;
  color: var(--text-color);
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 30px;
  font-family: var(--Main-font);
  line-height: 1.5;
}
.gallery-caption p {
  font-size: 15px;
  color: var(--text-color);
  text-transform: capitalize;
  font-weight: 300;
  font-family: var(--Main-font);
  line-height: 1.5;
}
</style>
