<template>
  <Section_head SectionName="Services" />
  <services />
  <services />
</template>

<script>
import Section_head from "@/components/Section/Section_head.vue";
import services from "@/components/services/services.vue";

export default {
  name: "ServicesView",
  components: {
    Section_head,
    services,
  },
};
</script>

<style></style>
