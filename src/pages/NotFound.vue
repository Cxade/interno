<template>
  <div class="not-found">
    <div class="not-found__main center">
      <div class="not-found__box">
        <h1 class="not-found__heading">404</h1>
        <h2 class="not-found__text">
          We are sorry, but the page you requested was not found
        </h2>
        <router-link to="/" class="not-found__button">
          Back To Home
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="17"
            viewBox="0 0 18 17"
            fill="none"
          >
            <path
              d="M1 8.43536L14.7232 8.29851M9.61818 1.91132L16.1412 8.4343L9.48677 15.0887"
              stroke="#CDA274"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
      <div class="not-found__background"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.not-found {
  position: relative;
  &__main {
    display: flex;
    align-items: center;
    height: 1024px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 570px;
  }

  &__heading {
    color: $mainColor;
    font-size: 250px;
    margin-bottom: 15px;
  }
  &__text {
    color: $secondColor;
    font-size: 35px;
    letter-spacing: 0.35px;
    margin-bottom: 23px;
  }
  &__button {
    color: #fff;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 26px 54px;
    border-radius: 18px;
    background-color: $secondColor;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.1s;

    &:hover {
      cursor: pointer;
      background-color: $mainColor;
    }
    &:hover svg path {
      stroke: $secondColor;
    }
  }

  &__background {
    background: no-repeat url(@/assets/img/404-2.png);
    height: 1024px;
    border-radius: 0px 0px 0px 353px;
    position: absolute;
    left: 50%;
    width: 50%;
    background-position: center;
  }
}
</style>
