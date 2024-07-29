<template>
  <div class="container">
    <h1>List Category</h1>
    <form @submit.prevent="createCategory">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="data.name"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <textarea class="form-control" id="description" rows="3" v-model="data.description"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <ul class="list-group mt-4">
      <li
        class="list-group-item"
        v-for="category in categories"
        :key="category.id"
      >
        <h4>{{ category.name }}</h4>
        <p>{{ category.description }}</p>
        <button class="btn btn-info btn-sm">Show Details</button>
        <button class="btn btn-secondary btn-sm">Edit</button>
        <button
          class="btn btn-danger btn-sm"
          @click="deleteCategory(category.id)"
        >
          Delete
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {
        name: "",
        description: "",
      },
      categories: [],
      editingCategory: null,
    };
  },
  methods: {
    async fetchCategories() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/category/list"
        );
        if (response.data.success) {
          console.log(response.data.data);
          this.categories = response.data.data;
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },
    async createCategory() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/api/category/create",
          this.data
        );
        if (response.data.success) {
          this.fetchCategories();
          this.data.name = "";
          this.data.description = "";
        }
        }catch (error) {
          console.error("Error creating category:", error);
      }
    }
  },
  mounted() {
    this.fetchCategories();
  },
};
</script>

<style>
</style>