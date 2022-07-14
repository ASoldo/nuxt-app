import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('my-store', {

  state: () =>({
     counter: ref<number>(10)
  }),
  persist: true

})
// export const useFiltersStore = defineStore({
//   id: 'andrija-store',
//   state: () => {
//     return {
//       filtersLists: ['youtube', 'twitch'] as string[],
//       counter: 0 as number
//     }
//   },
//   actions: {},
//   getters: {
//     filtersList: state => state.filtersLists,
//   },
// })