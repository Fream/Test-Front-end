import Vue from 'vue';
import Vuex from 'vuex';
import vacuumVessels from './modules/vacuumVessel';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vacuumVessels
  }
});
