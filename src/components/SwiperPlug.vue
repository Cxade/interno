<template>
  <div class="plug__swiper-box">
    <div class="plug__swiper">
      <p class="plug__swiper-text">01</p>
    </div>
    <div class="plug__swiper">02</div>
    <div class="plug__swiper">03</div>
    <div class="plug__swiper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="53"
        height="52"
        viewBox="0 0 53 52"
        fill="none"
      >
        <path
          d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
          stroke="#292f36"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "SwiperPlug",
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.plug__swiper-box {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.plug__swiper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 50px;
  border: 1px solid $mainColor;

  &:first-child {
    border: none;
    background-color: $backColor;
  }

  &-text {
    color: $secondColor;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
