<template>
    <div class="home">
      <AppHeader />
      <AppAbout />
      <AppMenu />
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from './Header.vue'; 
  import AppAbout from './About.vue'; 
  import AppMenu from './Menu.vue';
  import AppFooter from './Footer.vue';  
  
  export default {
    name: 'AppHome',
    components: {
      AppHeader, 
      AppAbout, 
      AppMenu, 
      AppFooter
    }
  };
  </script>
  