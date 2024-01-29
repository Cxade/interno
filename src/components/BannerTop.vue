<template>
  <div
    class="banner"
    :style="{
      background: `no-repeat center 80% url('./img/banners/${imageName}')`,
    }"
  >
    <div v-if="bannerInside" class="banner__inside">
      <h2 class="banner__heading">{{ insideHeading }}</h2>
      <p class="banner__text">{{ insideBreadcrumbs }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BannerTop",
  props: {
    bannerInside: {
      type: Boolean,
      default: false,
    },
    insideHeading: {
      type: String,
    },
    insideBreadcrumbs: {
      type: String,
    },
    imageName: {
      type: String,
      required: true,
    },
  },

  data() {
    return {};
  },

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.banner {
  background-color: #e7e7e7;
  height: 356px;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 200px;

  &__inside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 41px 78px;
    border-radius: 37px 37px 0px 0px;
    background: #fff;
  }
  &__heading {
    color: $secondColor;
    font-size: 50px;
  }
  &__text {
    color: $textColor;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.22px;
  }
}

@media screen and (max-width: 767px) {
  .banner {
    margin-bottom: 100px;
  }
}
</style>
