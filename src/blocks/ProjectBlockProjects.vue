<template>
  <div class="projects__box">
    <ProjectCard
      v-for="card in cards"
      :key="card.id"
      :img-name="card.imgName"
      :heading="card.heading"
      :text="card.text"
      :style="styleCards"
    />
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue";
export default {
  name: "ProjectBlockProjects",
  components: {
    ProjectCard,
  },
  props: {
    cards: {
      type: Array,
    },
  },

  data() {
    return {
      styleCards: {
        maxWidth: "585px",
        display: "inline-block",
      },
    };
  },
  created() {},
  computed: {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.projects {
  &__box {
    column-count: 2;
  }
}
</style>
