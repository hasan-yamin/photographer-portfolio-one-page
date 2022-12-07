<template>
  <header>
    <base-container>
      <the-header></the-header>
    </base-container>
  </header>
  <section class="home" v-if="activeMenu === 'home'">
    <home-vue></home-vue>
  </section>

  <about-vue v-if="activeMenu === 'about'"></about-vue>
  <portfolio-vue v-if="activeMenu === 'portfolio'"></portfolio-vue>
  <contact-vue v-if="activeMenu === 'contact'"></contact-vue>

  <the-footer></the-footer>
</template>

<script>
import BaseContainer from './assets/BaseContainer.vue';
import TheHeader from './assets/TheHeader.vue';
import HomeVue from './components/pages/HomeVue.vue';
import AboutVue from './components/pages/AboutVue.vue';
import PortfolioVue from './components/pages/PortfolioVue.vue';
import ContactVue from './components/pages/ContactVue.vue';
import TheFooter from './assets/TheFooter.vue';
export default {
  name: 'App',
  components: {
    BaseContainer,
    TheHeader,
     HomeVue,
    AboutVue,
    PortfolioVue,
    ContactVue,
    TheFooter,
  },
  computed: {
    activeMenu: {
      get() {
        return this.getViewSection()
      },
    }
  },
  methods: {
    getViewSection() {
      return this.$store.getters.getViewSection
    }
  }
}
</script>

<style lang="scss"  >
@import './sass/variables/vars';
@import './sass/helpers/media-queries';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

header {
  width: 100%;
  background-color: $BG_color;
}
</style>
