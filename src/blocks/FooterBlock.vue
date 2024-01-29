<template>
  <footer class="footer">
    <div class="footer__main center">
      <div class="footer__left">
        <LogoMain />
        <p class="footer__left-text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__left-social">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="22px"
            >
              <path
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
          </a>
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="22px"
            >
              <path
                d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="footer__mid">
        <h3 class="footer__mid-heading">Pages</h3>
        <NavigationComp :style="{ flexDirection: 'column' }" />
      </div>
      <div class="footer__right">
        <h3 class="footer__right-title">Contact</h3>
        <p class="footer__right-text">
          55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p class="footer__right-text footer__right-mail">contact@interno.com</p>
        <p class="footer__right-text">(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>
<script>
import LogoMain from "@/components/LogoMain.vue";
import NavigationComp from "@/components/NavigationComp.vue";

export default {
  name: "FooterBlock",
  components: {
    LogoMain,
    NavigationComp,
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.footer {
  &__main {
    display: flex;
    padding-bottom: 134px;
  }
  &__left {
    max-width: 394px;
    margin-right: 101px;

    &-text {
      color: $textColor;
      font-size: 22px;
      letter-spacing: 0.22px;
      margin-top: 18px;
      margin-bottom: 30px;
    }
    &-social {
      display: flex;
      gap: 54px;
    }
  }

  &__mid {
    display: flex;
    flex-direction: column;
    max-width: 125px;
    margin-right: 322px;

    &-heading {
      color: $secondColor;
      font-size: 25px;
      margin-bottom: 9px;
    }
  }

  &__right {
    max-width: 258px;
    &-title {
      color: $secondColor;
      font-size: 25px;
      margin-bottom: 26px;
    }

    &-text {
      color: $textColor;
      font-size: 22px;
      letter-spacing: 0.22px;
    }

    &-mail {
      line-height: 300%;
    }
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    &__main {
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 20px;
    }
    &__left {
      margin-right: 0;
    }
    &__mid {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 767px) {
}
</style>
