<template>
  <div class="container">
    <header>
      <h2>Final Exam Attendance</h2>
    </header>
    <section>
      <form>
        <div class="form-group">
          <input type="text" v-model="name" />
          <button @click.prevent="add">Add Student</button>
        </div>
        <p v-if="studentList.length === 0">No student have been added yet - please start adding some!</p>
      </form>
    </section>
    <ul>

      <li v-for="(name, index) in studentList" :key="index" @click="deleted(index)">{{ name }} - {{ index }}</li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: '',
      studentList: []
    }
  },
  methods: {
    add() {
      if (this.name) {
        this.studentList.push(this.name);
        this.name = '';
      }
    },
    deleted(index) {
      this.studentList.splice(index, 1);
    }
  }
};
</script>

<style>
.container {
  width: 40%;
  margin: auto;
  text-align: center;
  font-family: sans-serif;
}

header {
  background: #69bb69;
  color: #fff;
  padding: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

.form-group {
  display: flex;
  justify-content: center;
}

button {
  border: none;
  cursor: pointer;
  padding: 12px;
  background: #e95353;
  color: #fff;
}

input {
  width: 60%;
  border: 1px solid #ccc;
  outline-color: #cce;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  background: #69bb69;
  padding: 10px;
  margin-top: 10px;
  font-weight: bold;
  border-radius: 40px;
}</style>
