const moduleHome = {
  state: {
    projectKitchenCards: [],
  },
  getters: {
    projectKitchenCards(state) {
      return state.projectKitchenCards;
    },
  },
  mutations: {
    SET_KITCHEN_CARDS(state, projectKitchenCards) {
      state.projectKitchenCards = projectKitchenCards;
    },
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        commit("SET_KITCHEN_CARDS", [
          {
            id: 0,
            imgName: "kitchen1.png",
            heading: "Modern Kitchen",
            text: "Decor / Artchitecture",
          },
          {
            id: 1,
            imgName: "kitchen2.png",
            heading: "Modern Kitchen",
            text: "Decor / Artchitecture",
          },
          {
            id: 2,
            imgName: "kitchen3.png",
            heading: "Modern Kitchen",
            text: "Decor / Artchitecture",
          },
          {
            id: 3,
            imgName: "kitchen4.png",
            heading: "Modern Kitchen",
            text: "Decor / Artchitecture",
          },
        ]);
      }, 2000);
    },
  },
};

export default moduleHome;
