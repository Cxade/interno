<template>
  <div class="articles">
    <div class="articles__banner"></div>
    <div class="articles__main center">
      <div class="articles__content">
        <div class="articles__articles-box">
          <div
            class="articles__article"
            v-for="article in listArticles"
            :key="article.id"
          >
            <div v-if="article.tag === activeTag">
              <p class="articles__article-date">{{ article.date }}</p>
              <h1>{{ article.title }}</h1>
              <img :src="'/img/articles/' + article.img" :alt="article.tag" />
              <p class="articles__article-text">{{ article.text }}</p>
            </div>
          </div>
        </div>
        <div class="articles__tags-box">
          <h3>Tags</h3>
          <div class="articles__buttons-box">
            <button
              v-for="(tag, index) in tags"
              :key="index"
              class="articles__button"
              :class="{ active: activeTag === tag }"
              @click="activateButton(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "PageArticles",
  data() {
    return {
      tags: [
        "kitchen",
        "bedroom",
        "building",
        "architecture",
        "kitchen planning",
      ],
      activeTag: "kitchen",
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    activateButton(tag) {
      this.activeTag = tag;
    },
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters(["listArticles"]),
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.articles__banner {
  background: no-repeat center 50% url("@/assets/img/articles_top.png");
  background-color: #e7e7e7;
  height: 351px;
  object-fit: cover;
  margin-bottom: 130px;
}

.articles {
  &__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 96px;
  }

  &__articles-box {
    max-width: 800px;
  }
  &__article {
    &-date {
      font-size: 16px;
      letter-spacing: 0.16px;
      margin-bottom: 30px;
    }
    & h1 {
      margin-bottom: 20px;
    }
    & img {
      border-radius: 50px;
      margin-bottom: 48px;
    }
    &-text {
      font-size: 22px;
      letter-spacing: 0.22px;
    }
  }

  &__tags-box {
    max-width: 345px;

    & h3 {
      margin-bottom: 24px;
      font-size: 25px;
    }
  }
  &__buttons-box {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }
  &__button {
    color: $secondColor;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 125%;
    letter-spacing: 0.36px;
    padding: 9px 30px;
    border-radius: 10px;
    background-color: $backColor;
    cursor: pointer;
  }
}
.active {
  background-color: $secondColor;
  color: #fff;
}
@media screen and (max-width: 1024px) {
  .articles__content {
    flex-direction: column-reverse;
    gap: 40px;
  }
}
</style>
