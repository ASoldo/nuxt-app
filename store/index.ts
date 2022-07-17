import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFiltersStore = defineStore(
  'my-store', () => {
    const counter = ref(10)
    return {
      counter
    }
  },
  {
    persist: true
  }
)
