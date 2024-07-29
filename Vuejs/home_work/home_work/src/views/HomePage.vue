<template>
  <div>

    <div id="carouselExampleControls" class="mt-1 carousel slide container" data-bs-ride="carousel">
      <SlideShowVue/>
    </div>
      <WelcomeTextVue/>
    <div class="mt-5 mb-5 container d-flex justify-content-evenly">
      <div class="card" style="width: 20rem;" v-for="(card, index) in cards" :key="index">
        <img :src="card.img" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">title: {{card.title}} </h5>
          <p class="card-text">Color: {{card.color}} </p>
          <a href="#" class="btn btn-success">View Detail</a>
        </div>
      </div>
    </div>
    <div class="mt-5">
     
    </div>
  </div>
</template>

<script>
import SlideShowVue from '../components/SlideShow.vue';
import WelcomeTextVue from '../components/WelcomeText.vue';


export default {
  components: {
    SlideShowVue,
    WelcomeTextVue,
  },
  data(){
    return {
      cards:[
        {
          title: 'Sparrow',
          color:'Orange',
          img:'https://cdn.pixabay.com/photo/2023/10/23/17/53/bird-8336583_1280.jpg'
        },
        {
          title: 'Kok',
          color:'Red',
          img:'https://cdn.pixabay.com/photo/2024/03/05/22/04/bird-8615360_1280.jpg'
        },
        {
          title: 'Parrot',
          color:'Green',
          img:'https://cdn.pixabay.com/photo/2024/02/16/19/22/green-parrot-8578205_1280.jpg'
        },
        {
          title: 'Parrot',
          color:'Blue',
          img:'https://cdn.pixabay.com/photo/2023/11/09/19/36/zoo-8378189_1280.jpg'
        }
        
      ]
    }
  }
}
</script>

<style>

</style>