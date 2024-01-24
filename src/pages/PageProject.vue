<template>
  <div class="project">
    <BannerTop
      image-name="banner_project.png"
      banner-inside
      inside-heading="Our Project"
      inside-breadcrumbs="Home / Project"
    />
    <div class="project__main center">
      <div class="project__tags">
        <button
          v-for="(tag, index) in tags"
          :key="index"
          class="project__tag"
          :class="{ active: activeTag === tag }"
          @click="activateButton(tag)"
        >
          {{ tag }}
        </button>
      </div>
      <ProjectBlockProjects :cards="activeData" />
      <SwiperPlug :style="{ marginBottom: '200px' }" />
    </div>
  </div>
</template>

<script>
import BannerTop from "@/components/BannerTop.vue";
import ProjectBlockProjects from "@/blocks/ProjectBlockProjects.vue";
import SwiperPlug from "@/components/SwiperPlug.vue";

export default {
  name: "PageProject",
  components: { BannerTop, ProjectBlockProjects, SwiperPlug },
  data() {
    return {
      tags: ["Bathroom", "Bedroom", "Kitchen", "Living Area"],
      activeTag: "Bedroom",
      projectCardsBedroom: [
        {
          id: 0,
          imgName: "project_card_1.png",
          heading: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 1,
          imgName: "project_card_2.png",
          heading: "Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 2,
          imgName: "project_card_3.png",
          heading: "Classic Minimal Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 3,
          imgName: "project_card_4.png",
          heading: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 4,
          imgName: "project_card_5.png",
          heading: "Minimal Bedroom table",
          text: "Decor / Artchitecture",
        },
        {
          id: 5,
          imgName: "project_card_6.png",
          heading: "System Table",
          text: "Decor / Artchitecture",
        },
        {
          id: 6,
          imgName: "project_card_7.png",
          heading: "Modern Medroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 7,
          imgName: "project_card_8.png",
          heading: "Modern Bedroom",
          text: "Decor / Artchitecture",
        },
      ],
      projectCardsBathroom: [
        {
          id: 8,
          imgName: "project_card_1.png",
          heading: "Minimal Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 9,
          imgName: "project_card_2.png",
          heading: "Minimal Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 10,
          imgName: "project_card_3.png",
          heading: "Classic Minimal Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 11,
          imgName: "project_card_4.png",
          heading: "Modern Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 12,
          imgName: "project_card_5.png",
          heading: "Minimal Bathroom table",
          text: "Decor / Artchitecture",
        },
        {
          id: 13,
          imgName: "project_card_6.png",
          heading: "System Table Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 14,
          imgName: "project_card_7.png",
          heading: "Modern Bathroom",
          text: "Decor / Artchitecture",
        },
        {
          id: 15,
          imgName: "project_card_8.png",
          heading: "Modern Bathroom",
          text: "Decor / Artchitecture",
        },
      ],
      projectCardsKitchen: [
        {
          id: 16,
          imgName: "project_card_1.png",
          heading: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          id: 17,
          imgName: "project_card_2.png",
          heading: "Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          id: 18,
          imgName: "project_card_3.png",
          heading: "Classic Minimal Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          id: 19,
          imgName: "project_card_4.png",
          heading: "Modern Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          id: 20,
          imgName: "project_card_5.png",
          heading: "Minimal Kitchen table",
          text: "Decor / Artchitecture",
        },
        {
          id: 21,
          imgName: "project_card_6.png",
          heading: "System Table Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          id: 22,
          imgName: "project_card_7.png",
          heading: "Modern Kitchen",
          text: "Decor / Artchitecture",
        },
        {
          id: 23,
          imgName: "project_card_8.png",
          heading: "Modern Kitchen",
          text: "Decor / Artchitecture",
        },
      ],
      projectCardsLivingArea: [
        {
          id: 24,
          imgName: "project_card_1.png",
          heading: "Minimal Living Area",
          text: "Decor / Artchitecture",
        },
        {
          id: 25,
          imgName: "project_card_2.png",
          heading: "Minimal Living Area",
          text: "Decor / Artchitecture",
        },
        {
          id: 26,
          imgName: "project_card_3.png",
          heading: "Classic Minimal Living Area",
          text: "Decor / Artchitecture",
        },
        {
          id: 27,
          imgName: "project_card_4.png",
          heading: "Modern Living Area",
          text: "Decor / Artchitecture",
        },
        {
          id: 28,
          imgName: "project_card_5.png",
          heading: "Minimal Living Area table",
          text: "Decor / Artchitecture",
        },
        {
          id: 29,
          imgName: "project_card_6.png",
          heading: "System Table Living Area",
          text: "Decor / Artchitecture",
        },
        {
          id: 30,
          imgName: "project_card_7.png",
          heading: "Modern Living Area",
          text: "Decor / Artchitecture",
        },
        {
          id: 31,
          imgName: "project_card_8.png",
          heading: "Modern Living Area",
          text: "Decor / Artchitecture",
        },
      ],
    };
  },
  computed: {
    activeData() {
      if (this.activeTag === "Bathroom") {
        return this.projectCardsBathroom;
      } else if (this.activeTag === "Bedroom") {
        return this.projectCardsBedroom;
      } else if (this.activeTag === "Kitchen") {
        return this.projectCardsKitchen;
      } else if (this.activeTag === "Living Area") {
        return this.projectCardsLivingArea;
      } else {
        return null;
      }
    },
  },
  mounted() {},
  methods: {
    activateButton(tag) {
      this.activeTag = tag;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.project {
  &__tags {
    display: flex;
    justify-content: space-between;
    border: 1px solid $mainColor;
    border-radius: 18px;
    max-width: 880px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
  &__tag {
    display: flex;
    justify-content: center;
    padding: 26px 66px;
    color: $secondColor;
    border: none;
    background: none;
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    line-height: 125%;
    letter-spacing: 0.36px;
    border-radius: 17px;
    transition: background-color 0.3s, color 0.3s;
  }

  &__tag:hover {
    color: #fff;
    background-color: $mainColor;
  }
}

.active {
  color: #fff;
  background-color: $mainColor;
}

@media screen and (max-width: 1024px) {
  .project__tag {
    padding: 16px 20px;
  }
}

@media screen and (max-width: 767px) {
  .project__tag {
    padding: 15px 0;
    font-size: 16px;
  }
}
</style>
