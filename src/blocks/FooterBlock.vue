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
          <a href="#"
            ><img
              src="@/assets/img/x-twitter.svg"
              alt="twitter icon"
              height="22px"
          /></a>
          <a href="#"
            ><img
              src="@/assets/img/linkedin-in.svg"
              alt="linkedin-in icon"
              height="22px"
          /></a>
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
</style>
