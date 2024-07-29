<template>
  <div class="container">
    <!-- Add User Form -->
    <div class="row">
      <div class="col-md-6 mx-auto">
        <form @submit.prevent="addUser" class="mb-3">
          <div class="input-group">
            <input v-model="newUser.name" type="text" class="form-control" placeholder="Name" required>
            <input v-model="newUser.email" type="email" class="form-control" placeholder="Email" required>
            <button type="submit" class="btn btn-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>

    <!-- User List -->
    <div class="row">
      <div class="col-md-6 mx-auto">
        <ul class="list-group">
          <li v-for="user in users" :key="user.id" class="list-group-item">
            <div v-if="!user.editMode">
              {{ user.name }} - {{ user.email }}
              <button class="btn btn-danger btn-sm float-end" @click="removeUser(user.id)">Remove</button>
              <button class="btn btn-primary btn-sm float-end me-2" @click="toggleEditMode(user)">Edit</button>
            </div>
            <div v-else>
              <div class="input-group">
                <input v-model="user.editName" type="text" class="form-control">
                <input v-model="user.editEmail" type="email" class="form-control">
                <button class="btn btn-success btn-sm" @click="saveUserEdit(user)">Save</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Alice', email: 'alice@example.com', editMode: false},
        { id: 2, name: 'Bob', email: 'bob@example.com', editMode: false },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', editMode: false}
      ],
      newUser: { name: '', email: '' }
    };
  },
  methods: {
    addUser() {
      if (this.newUser.name && this.newUser.email) {
        const newUser = { 
          id: this.newUser.id,
          name: this.newUser.name,
          email: this.newUser.email,
          editMode: false,
        };
        this.users.push(newUser);
        this.newUser = { name: '', email: '' };
      }
    },
    removeUser(id) {
      this.users = this.users.filter(user => user.id!== id);
    },
    toggleEditMode(user) {
      user.editMode =!user.editMode;
      user.editName = user.name;
      user.editEmail = user.email;
    },
    saveUserEdit(user) {
      if (user.editName && user.editEmail) {
        user.name = user.editName;
        user.email = user.editEmail;
        user.editMode = false;
      }
    }
  }
};
</script>

<style >
</style>
