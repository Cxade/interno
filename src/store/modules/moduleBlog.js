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
            text: "Kitchen Design1",
            heading: "Let’s Get Solution For Building Construction Work",
            date: "26 December,2022",
          },
          {
            id: 2,
            imgName: "design2.png",
            text: "Living Design2",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            date: "22 December,2022",
          },
          {
            id: 3,
            imgName: "design3.png",
            text: "Interior Design3",
            heading: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022",
          },
          {
            id: 4,
            imgName: "design4.png",
            text: "Kitchen Design4",
            heading: "Let’s Get Solution For Building Construction Work",
            date: "26 December,2022",
          },
          {
            id: 5,
            imgName: "design5.png",
            text: "Living Design5",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            date: "22 December,2022",
          },
          {
            id: 6,
            imgName: "design6.png",
            text: "Interior Design6",
            heading: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022",
          },
          {
            id: 7,
            imgName: "design6.png",
            text: "Kitchen Design7",
            heading: "Let’s Get Solution For Building Construction Work",
            date: "26 December,2022",
          },
          {
            id: 8,
            imgName: "design5.png",
            text: "Living Design8",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            date: "22 December,2022",
          },
          {
            id: 9,
            imgName: "design4.png",
            text: "Interior Design9",
            heading: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022",
          },
          {
            id: 10,
            imgName: "design2.png",
            text: "Kitchen Design10",
            heading: "Let’s Get Solution For Building Construction Work",
            date: "26 December,2022",
          },
          {
            id: 11,
            imgName: "design1.png",
            text: "Living Design11",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            date: "22 December,2022",
          },
          {
            id: 12,
            imgName: "design3.png",
            text: "Interior Design12",
            heading: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022",
          },
          {
            id: 13,
            imgName: "design2.png",
            text: "Kitchen Design13",
            heading: "Let’s Get Solution For Building Construction Work",
            date: "26 December,2022",
          },
          {
            id: 14,
            imgName: "design1.png",
            text: "Living Design14",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            date: "22 December,2022",
          },
          {
            id: 15,
            imgName: "design6.png",
            text: "Interior Design15",
            heading: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022",
          },
          {
            id: 16,
            imgName: "design4.png",
            text: "Kitchen Design16",
            heading: "Let’s Get Solution For Building Construction Work",
            date: "26 December,2022",
          },
          {
            id: 17,
            imgName: "design6.png",
            text: "Living Design17",
            heading: "Low Cost Latest Invented Interior Designing Ideas.",
            date: "22 December,2022",
          },
          {
            id: 18,
            imgName: "design5.png",
            text: "Interior Design18",
            heading: "Best For Any Office & Business Interior Solution",
            date: "25 December,2022",
          },
        ]);
      }, 2000);
    },
  },
};

export default moduleBlog;
