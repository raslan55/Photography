<template>
  <Section_head SectionName=" Contact us" />
  <Contact />
</template>

<script>
import Section_head from "@/components/Section/Section_head.vue";
import Contact from "@/components/Contact/Contact.vue";

export default {
  name: "ContactView",
  components: {
    Section_head,
    Contact,
  },
};
</script>

<style></style>
