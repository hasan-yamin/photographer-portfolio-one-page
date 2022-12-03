<template>
  <Base-container>
    <the-header></the-header>
  </Base-container>
  <home-vue></home-vue>
  <about-vue></about-vue>
  <portfolio-vue></portfolio-vue>
  <contact-vue></contact-vue>
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
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
