<template>
    <h1>Student details of ID = {{ id }}</h1>
</template>

<script>
export default {
    name: "StudentView",
    props: ['id']
}
</script>

<style scoped>
h1 {
    text-align: center;
    color: rgb(0, 0, 115);
}
</style>