<template>
 <NavBarVue/>
 <router-view/>
<FooterVue/>
</template>

<script>
import NavBarVue from '@/components/NavBar.vue';
import FooterVue from '@/components/Footer.vue';

export default {
  components: {
    NavBarVue,
    FooterVue,
  }
}
</script>

<style>

</style>
