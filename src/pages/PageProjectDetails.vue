<template>
  <div class="project-details">
    <BannerTop image-name="banner_project-details.png" />
    <div class="project-details__main center">
      <div class="project-details__content">
        <div
          class="project-details__box"
          v-for="item in mainText"
          :key="item.id"
        >
          <h1 class="project-details__heading">{{ item.heading }}</h1>
          <p class="project-details__text">{{ item.text }}</p>
        </div>
      </div>
      <DetailsBlockSwiper />
    </div>
  </div>
</template>

<script>
import BannerTop from "@/components/BannerTop.vue";
import DetailsBlockSwiper from "@/blocks/DetailsBlockSwiper.vue";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "PageProjectDetails",
  components: { BannerTop, DetailsBlockSwiper },
  data() {
    return {};
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters(["mainText"]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.project-details {
  &__content {
    display: flex;
    justify-content: center;
  }
  &__box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 658px;
    margin-bottom: 100px;
  }
  &__heading {
    color: $secondColor;
    font-size: 50px;
    letter-spacing: 1px;
    margin-bottom: 10px;
  }
  &__text {
    color: $textColor;
    font-size: 22px;
    letter-spacing: 0.22px;
  }
}
</style>
