import { defineStore } from 'pinia'

export const useFiltersStore = defineStore('my-store', () => {

  const counter = ref<number>(10);

  return {
    counter
  }
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