<template lang="">
  <nav class="navigation">
    <router-link to="/" class="navigation__link">Home</router-link>
    <router-link to="/project" class="navigation__link">Project</router-link>
    <router-link to="/blog" class="navigation__link">Blog</router-link>
  </nav>
</template>
<script>
export default {
  name: "NavigationComp",
};
</script>
<style lang="scss">
@import "@/assets/styles/variables.scss";

.navigation {
  display: flex;
  flex-direction: column;
  &__link {
    color: $secondColor;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 300%;
    transition: color 0.1s;

    &:hover {
      color: $mainColor;
    }
  }
}
.router-link-active {
  color: $mainColor;
}
</style>
