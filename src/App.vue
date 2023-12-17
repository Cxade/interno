<template>
  <div id="app">
    <HeaderBlock />
    <router-view />
    <FooterBlock v-if="showFooter" />
  </div>
</template>

<script>
import HeaderBlock from "@/blocks/HeaderBlock.vue";
import FooterBlock from "@/blocks/FooterBlock.vue";

export default {
  components: {
    HeaderBlock,
    FooterBlock,
  },
  computed: {
    showFooter() {
      return this.$route.name !== "notFound";
    },
  },
};
</script>
