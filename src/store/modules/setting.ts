import { defineStore } from "pinia";

const settingStore = defineStore("setting", {
  state: () => {
    return {
      zhedie: false,
      refresh: false,
    };
  },
  actions: {},
  persist: true,
});

export default settingStore;
