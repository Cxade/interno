const moduleBlog = {
  state: {
    articlesCards: [],
  },
  getters: {
    articlesCards(state) {
      return state.articlesCards;
    },
  },
  mutations: {
    SET_ARTICLES_CARDS(state, articlesCards) {
      state.articlesCards = articlesCards;
    },
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        commit("SET_ARTICLES_CARDS", [
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
        ]);
      }, 2000);
    },
  },
};

export default moduleBlog;
