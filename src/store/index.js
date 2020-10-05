import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0
};

const getters = {
  getCount(state) {
    return state.count;
  }
};

const mutations = {
  increment(state) {
    state.count++;
  }
};

const actions = {
  plus: ({ commit }) => {
    commit("increment");
  }
};

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
