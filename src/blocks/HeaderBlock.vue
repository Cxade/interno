<template>
  <header class="header">
    <div class="header__main center">
      <LogoMain />
      <NavigationComp :style="{ gap: '50px', flexDirection: 'row' }" />
    </div>
  </header>
</template>
<script>
import LogoMain from "@/components/LogoMain.vue";
import NavigationComp from "@/components/NavigationComp.vue";

export default {
  name: "HeaderBlock",
  components: {
    LogoMain,
    NavigationComp,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.header {
  &__main {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 53px 0 57px 0;
  }
}

@media screen and (max-width: 767px) {
  .header__main {
    flex-direction: column;
  }
}
</style>
