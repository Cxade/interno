<template>
  <div class="projects__kitchen">
    <img
      :src="'./img/' + imgName"
      alt="kitchen project"
      class="projects__kitchen-img"
      :class="'border_' + numbImg"
    />
    <div class="projects__kitchen-content">
      <div>
        <h3 class="projects__kitchen-heading">
          {{ heading }}
        </h3>
        <p class="projects__kitchen-text">{{ text }}</p>
      </div>
      <router-link to="/project" href="#" class="link-arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 70 70"
          fill="none"
        >
          <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
          <path
            d="M32 44L40 35L32 26"
            stroke="#292F36"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    numbImg: {
      type: Number,
    },
    imgName: {
      type: String,
    },
    heading: {
      type: String,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.projects {
  &__kitchen {
    max-width: 548px;
    margin-bottom: 56px;
  }
  &__kitchen-img {
    margin-bottom: 24px;
  }
  &__kitchen-content {
    display: flex;
    justify-content: space-between;
  }
  &__kitchen-heading {
    color: $secondColor;
    font-size: 25px;
    letter-spacing: 0.5px;
    margin-bottom: 4px;
  }
  &__kitchen-text {
    color: $textColor;
    font-size: 22px;
    letter-spacing: 0.22px;
  }
}
.border_0 {
  border-radius: 0 80px 0 0;
}
.border_1 {
  border-radius: 80px 0 0 0;
}
.border_2 {
  border-radius: 0 0 80px 0;
}
.border_3 {
  border-radius: 0 0 0 80px;
}
@media screen and (max-width: 767px) {
  .projects__kitchen-heading {
    font-size: 20px;
  }
  .projects__kitchen-text {
    font-size: 17px;
  }
  .link-arrow svg {
    width: 40px;
    height: 40px;
  }
}
</style>
