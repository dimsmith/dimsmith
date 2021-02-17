<template>
  <div id="app">
    <CHeader/>
    <Portfolio :portfolio="portfolio"/>
    <CFooter>
      <template v-slot:theme>
        <a class="themeToggle" href="#" @click="toggleTheme">{{ helpText }}</a>
      </template>
    </CFooter>
  </div>
</template>

<script>
import CFooter from "./templates/CFooter.vue";
import CHeader from "./templates/CHeader.vue";
import Portfolio from "./templates/Portfolio.vue";

export default {
  name: "App",
  components: {CHeader, CFooter, Portfolio},
  data() {
    return {
      theme: "",
      helpText: "",
      portfolio: {}
    }
  },
  created() {
    let localTheme = localStorage.getItem('theme');
    this.theme = localTheme === null ? "light" : localTheme
    document.documentElement.setAttribute('data-theme', this.theme);
    this.fakeFetch().then(res => this.portfolio = res).catch(err => console.log("ERROR", err))
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark"
      document.documentElement.setAttribute("data-theme", this.theme)
      localStorage.setItem("theme", this.theme)
    },
    async fakeFetch() {
      return await fetch("/static/assets/portfolio.json").then(res => {
        if (res.status === 404) {
          throw Error("Unable to load " + res.url)
        }
        return res.json()

      })
    }
  },
  watch: {
    theme: function (newVal) {
      this.helpText = (newVal === "dark") ? "Switch to light mode 🌝" : "Switch to dark mode 🌚"
    }
  }
}
</script>

<style scoped>

</style>