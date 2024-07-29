<template>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cdn.pixabay.com/photo/2024/05/15/08/23/bird-8763079_960_720.jpg" class="d-block w-100" alt="..." height="550vh">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2024/05/09/22/54/penguin-8751952_960_720.jpg" class="d-block w-100" alt="..." height="550vh">
    </div>
    <div class="carousel-item">
      <img src="https://cdn.pixabay.com/photo/2021/07/24/07/25/chow-chow-6488849_1280.jpg" class="d-block w-100" alt="..." height="550vh">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</template>

<script>
export default {
    name: "SlideShowVue",
}
</script>

<style>

</style>