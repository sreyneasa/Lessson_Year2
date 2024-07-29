<template>
    <nav>
        <router-link to="/students" active-class="active">Students</router-link>
        <router-link to="/student/2" active-class="active">Student 2</router-link>
        <router-link to="/student/3" active-class="active">Student 3</router-link>
    </nav>
</template>

<style scoped>
nav {
    padding: 15px;
    background: rgb(29, 29, 154);
    display: flex;
    justify-content: space-evenly;
}

nav a {
    font-weight: bold;
    color: #fff;
    text-decoration: none;
    padding: 10px;
}

.active {
    color: orange;
    border: 1px solid orange;
}
</style>
  