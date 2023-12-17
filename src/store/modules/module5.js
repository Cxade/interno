const module5 = {
  state: {
    mainText: [],
  },
  getters: {
    mainText(state) {
      return state.mainText;
    },
  },
  mutations: {
    SET_TEXT(state, text) {
      state.mainText = text;
    },
  },
  actions: {
    fetchData({ commit }) {
      setTimeout(() => {
        commit("SET_TEXT", [
          {
            id: 0,
            heading: "Minimal Look Bedrooms",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.",
          },
        ]);
      }, 2000);
    },
  },
};

export default module5;
