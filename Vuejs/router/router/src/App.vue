<template>
  <div class="container">
    <!-- <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav> -->
    <NavbarVue/>
    <div class="mb-5">
      <router-view></router-view>
    </div>
    <FooterVue/>
    
  </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
import FooterVue from './components/Footer.vue';
export default {
  components:{
    NavbarVue,
    FooterVue,
  },
  name: "App",
};
</script>

<style>
nav {
  padding: 15px;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
}
</style>