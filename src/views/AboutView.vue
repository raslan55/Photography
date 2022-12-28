<template>
  <Section_head SectionName="About us" />
  <content />
  <Testimonials />
  <Achievements />
</template>

<script>
import content from "@/components/EXPERIENCES/content.vue";
import Testimonials from "@/components/Testimonials/Testimonials.vue";
import Achievements from "@/components/Achievements/Achievements.vue";
import Section_head from "@/components/Section/Section_head.vue";

export default {
  name: "AboutView",
  components: {
    content,
    Testimonials,
    Achievements,
    Section_head,
  },
};
</script>

<style></style>
