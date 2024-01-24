<template>
  <div class="projects__kitchen-box">
    <ProjectCard
      v-for="(card, index) in cards"
      :key="card.id"
      :img-name="card.imgName"
      :numbImg="index"
      :heading="card.heading"
      :text="card.text"
    />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";

export default {
  name: "HomeBlockProjects",
  components: {
    ProjectCard,
  },
  props: {
    cards: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.projects {
  &__kitchen-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 96px;
  }
}

@media screen and (max-width: 1024px) {
  .projects {
    &__kitchen-box {
      justify-content: center;
    }
  }
}
</style>
