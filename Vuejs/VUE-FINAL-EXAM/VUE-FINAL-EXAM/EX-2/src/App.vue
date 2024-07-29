<template>
  <div class="container">
    <div class="w-50">
      <header class="p-3">Fruit Shop</header>

      <current-date-form @dateChanged="getCurrentDate"></current-date-form>

      <fruit-form @fruitAdded="added"></fruit-form>

      <fruit-card v-for="(fruit, index) in fruits" :key="index" 
      :fruit="fruit" 
      :currentDate="currentDate"
      :index="index" 
      @showDetails="show"
      ></fruit-card>

    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      currentDate: '',
      fruitList: []
    }
  },
  methods: {
    added(fruit) {
      this.fruitList.push(fruit);
    },
    getCurrentDate(date) {
      this.currentDate = date;
    },
    show(index) {
      this.fruitList[index].isShow = !this.fruitList[index].isShow;
    }
  },
  computed: {
    fruits() {
      return this.fruitList;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

header {
  margin-top: 20px;
  background: blue;
  border-radius: 20px;
  text-align: center;
  color: white;
  font-size: 1.5rem;
}
</style>
