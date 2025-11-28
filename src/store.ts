import { createStore } from 'vuex';

export interface RootState {
  // extend with typed state fields as needed
}

export default createStore<RootState>({
  state: (): RootState => ({}),
  mutations: {},
  actions: {},
  modules: {},
});
