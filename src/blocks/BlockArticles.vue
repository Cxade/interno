<template>
  <div class="articles__box">
    <ArticlesCard v-for="card in articlesCards" :card="card" :key="card.id" />
  </div>
</template>
<script>
import ArticlesCard from "@/components/ArticlesCard.vue";

export default {
  name: "BlogBlockArticles",
  props: {
    articlesCards: Array,
  },
  components: { ArticlesCard },
};
</script>

<style lang="scss" scoped>
.articles__box {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
}
</style>
