<template>
  <div class="project">
    <BannerTop
      image-name="banner_project.png"
      banner-inside
      inside-heading="Our Project"
      inside-breadcrumbs="Home / Project"
    />
  </div>
</template>

<script>
import BannerTop from "@/components/BannerTop.vue";

export default {
  name: "PageProject",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: { BannerTop },
};
</script>

<style lang="scss" scoped></style>
