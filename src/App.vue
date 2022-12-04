<template>
  <header>
    <base-container>
      <the-header></the-header>
    </base-container>
  </header>
  <section class="home">
    <!-- <base-container> -->
    <home-vue></home-vue>
    <!-- </base-container> -->
  </section>


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
  height: 50px;
  background-color: $BG_color;
 
}

.home {
  // width: 100%;
  height: 1170px;
  background-image: url('./imgs/home-bg.png');

  @include breakpoint(xs) {
    background-image: none;
    background-color: $BG_color;
    height: auto;
  }

  @include breakpoint(sm) {
    background-image: none;
    background-color: $BG_color;
    height: auto;
  }
}
</style>
