<template>
  <div class="swiper-body">
    <swiper
      :pagination="pagination"
      :modules="modules"
      class="mySwiper"
      grab-cursor
    >
      <swiper-slide v-for="(imgName, index) in swiperImgName" :key="index"
        ><img
          class="swiper__img"
          :src="'/img/' + imgName"
          alt="project details"
      /></swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/scss";
import "swiper/scss/pagination";
import { Pagination } from "swiper/modules";
export default {
  name: "DetailsBlockSwiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperImgName: [
        "details_swiper.png",
        "details_swiper.png",
        "details_swiper.png",
      ],
    };
  },
  setup() {
    return {
      pagination: {
        clickable: true,
      },

      modules: [Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.swiper {
  width: 100%;
  height: 100%;
  border-radius: 70px;
  padding-bottom: 40px;

  &-body {
    position: relative;
    height: 100%;
    margin-bottom: 110px;
  }

  &-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
  }
  &-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 70px;
  }
  &:deep(.swiper-pagination-bullet) {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    opacity: 1;
    border: 1px solid black;
    background-color: #fff;
  }
  &:deep(.swiper-pagination-bullet-active) {
    background: $mainColor;
  }
}
</style>
