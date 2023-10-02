import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", {
  state: () => ({
    theme: "light",
  }),
  getters: {
    getTheme() {
      return this.theme;
    },
  },
  actions: {
    setTheme() {
        this.theme = this.theme === "light" ? "dark" : "light";
        console.log(this.theme);
      },
  },
});