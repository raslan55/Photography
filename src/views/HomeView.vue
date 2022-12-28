<template>
  <div class="home">
    <Main_bar />
    <content />
    <services />
    <Gallery />
    <Achievements />
    <Testimonials />
    <Our_Blog />
  </div>
</template>

<script>
// @ is an alias to /src
import Main_bar from "@/components/Main/Main.vue";
import content from "@/components/EXPERIENCES/content.vue";
import services from "@/components/services/services.vue";
import Gallery from "@/components/Gallrey/Gallery.vue";
import Achievements from "@/components/Achievements/Achievements.vue";
import Testimonials from "@/components/Testimonials/Testimonials.vue";
import Our_Blog from "@/components/Blog/Blog.vue";
export default {
  name: "HomeView",
  components: {
    Main_bar,
    content,
    services,
    Gallery,
    Achievements,
    Testimonials,
    Our_Blog,
  },
};
</script>
