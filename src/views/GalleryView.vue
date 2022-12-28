<template>
  <Section_head SectionName=" Our Gallery" />
  <Gallery />
</template>

<script>
import Section_head from "@/components/Section/Section_head.vue";
import Gallery from "@/components/Gallrey/Gallery.vue";

export default {
  name: "GalleryView",
  components: {
    Section_head,
    Gallery,
  },
};
</script>

<style></style>
