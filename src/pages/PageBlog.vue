<template>
  <div class="blog">
    <BannerTop
      banner-inside
      inside-heading="Articles & News"
      inside-breadcrumbs="Home / Blog"
      image-name="banner_blog.png"
    />
    <section class="post">
      <div class="post__main center">
        <h2 class="post__heading">Latest Post</h2>
        <div class="post__card">
          <img
            src="../assets/img/blog_post.jpg"
            class="post__img"
            alt="latest post"
          />
          <div class="post__card-content">
            <h3 class="post__card-heading">
              Low Cost Latest Invented Interior Designing Ideas
            </h3>
            <p class="post__card-text">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
            </p>
            <p class="post__card-text">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
            <div class="post__card-box">
              <p class="post__card-date">26 December,2022</p>
              <a href="#" class="link-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="53"
                  viewBox="0 0 52 53"
                  fill="none"
                >
                  <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                  <path
                    d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813"
                    stroke="#292f36"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="articles">
      <div class="articles__main center">
        <h1 class="articles__heading flex">Articles & News</h1>
        <BlockArticles :articlesCards="articlesCards" />
        <SwiperPlug :style="{ marginTop: '51px' }" />
      </div>
    </section>
  </div>
</template>

<script>
import BlockArticles from "@/blocks/BlockArticles.vue";

import BannerTop from "@/components/BannerTop.vue";
import SwiperPlug from "@/components/SwiperPlug.vue";

export default {
  name: "PageBlog",
  components: {
    BannerTop,
    SwiperPlug,
    BlockArticles,
  },
  data() {
    return {
      articlesCards: [
        {
          id: 1,
          imgName: "design1.png",
          text: "Kitchen Design",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 2,
          imgName: "design2.png",
          text: "Living Design",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 3,
          imgName: "design3.png",
          text: "Interior Design",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
        {
          id: 4,
          imgName: "design4.png",
          text: "Kitchen Design",
          heading: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022",
        },
        {
          id: 5,
          imgName: "design5.png",
          text: "Living Design",
          heading: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022",
        },
        {
          id: 6,
          imgName: "design6.png",
          text: "Interior Design",
          heading: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.post {
  margin-bottom: 150px;

  &__heading {
    color: $secondColor;
    font-size: 50px;
    letter-spacing: 1px;
    margin-bottom: 27px;
  }
  &__card {
    display: flex;
    align-items: center;
    gap: 65px;
    padding: 22px;
    border-radius: 62px;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  }
  &__img {
    border-radius: 50px;
  }
  &__card-content {
    display: flex;
    flex-direction: column;
    max-width: 489px;
    height: 375px;
  }
  &__card-heading {
    color: $secondColor;
    font-size: 25px;
    letter-spacing: 0.5px;
    margin-bottom: 22px;
  }
  &__card-text {
    color: $textColor;
    font-size: 22px;
    letter-spacing: 0.22px;
    margin-bottom: 41px;
    max-width: 469px;
  }
  &__card-box {
    display: flex;
    justify-content: space-between;
  }
  &__card-date {
    color: $textColor;
    font-size: 16px;
    letter-spacing: 0.16px;
  }
}
.articles {
  margin-bottom: 200px;
  &__heading {
    color: $secondColor;
    text-align: center;
    font-size: 50px;
    letter-spacing: 1px;
    margin-bottom: 12px;
  }
  &__text {
    color: $textColor;
    text-align: center;
    font-size: 22px;
    letter-spacing: 0.22px;
    margin-bottom: 52px;
  }
}
</style>
