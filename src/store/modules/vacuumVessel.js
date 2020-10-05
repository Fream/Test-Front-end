import clientApi from './../../clientApi';

const state = () => ({
  items: []
});

const getters = {
  getVacuumVessels: (state) => {

    // Sorting
    // Could be implemanted by :
    // javascript .sort()
    // API (back-end)
    // bootstrap-table sort

    let length = state.items.length;
    console.log(length);

    let items = state.items.map(item => {
      return {
        image: 'https://dev.alcotec.com.ua/' + item.img,
        name: item.title,
        availability: item.availability['ru'],
        price: item.priceUAH
      };
    });

    console.log(items);

    for (let i = length-1; i >= 0; i--) {
      for (let j = 1; j <= i; j++) {
        if (items[j-1].price < items[j].price) {
          let aux = items[j-1];
          items[j-1] = items[j];
          items[j] = aux;
        }
      }
    }

    console.log(items);

    return items;
  }
};

const actions = {
  getAll({ commit }) {
    clientApi.getVacuumVessels().then(items => {
      commit('setVacuumVessels', items.products);
    })
  }
};

const mutations = {
  setVacuumVessels(state, items) {
    state.items = items;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
