<template>
  <div id="app" class="d-flex flex-column">
    <AppHeader />
    <AppAbout />
    <AppMenu />
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from './components/Header.vue'; 
import AppAbout from './components/About.vue'; 
import AppMenu from './components/Menu.vue';
import AppFooter from './components/Footer.vue';  

export default {
  name: 'App',
  components: {
    AppHeader, 
    AppAbout, 
    AppMenu, 
    AppFooter
  }
}; 
</script>
