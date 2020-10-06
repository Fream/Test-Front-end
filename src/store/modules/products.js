import clientApi from '../../clientApi';

const state = () => ({
  items: {
    dosageMeters: [],
    vacuumVessels: []
  }
});

const getters = {
  // To options possible here:
  // 1) We could make sorting by action -> mutation and save new state with sorted items
  // 2) We could use getters to get sorted items from state, in this case we don't need any mutations of the state
  // NOTE: for this testing task first option has beeen selected. Only the data from requests should be stored in the state

  get: (state, getters) => (product, sortingAsc) => {
    if (sortingAsc === null) {
      return getters.getLazy(product);
    }

    // Sorting Bubble
    // Could be implemanted by :
    // javascript .sort()
    // API (back-end)
    // bootstrap-table sort

    let items = getters.getLazy(product);
    let length = items.length;

    if (sortingAsc == true) {
      for (let i = length-1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (items[j-1].price > items[j].price) {
            let aux = items[j-1];
            items[j-1] = items[j];
            items[j] = aux;
          }
        }
      }
    } else {
      for (let i = length-1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (items[j-1].price < items[j].price) {
            let aux = items[j-1];
            items[j-1] = items[j];
            items[j] = aux;
          }
        }
      }
    }

    return items;
  },

  getLazy: (state) => (product) => {
    return state.items[product].map(item => {
      return {
        image: 'https://dev.alcotec.com.ua/' + item.img,
        name: item.title,
        availability: item.availability['ru'],
        price: item.priceUAH
      };
    });
  }
};

const actions = {
  getProducts({ commit }, type) {
    clientApi.getProducts(type).then(items => {
      let payload = {type, items };

      commit('setProducts', payload);
    });
  }
};

const mutations = {
  setProducts(state, payload) {
    state.items[payload.type] = payload.items.products;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
