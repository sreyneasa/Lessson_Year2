<template>
    <div class="form-container mb-3 mt-3 row">
        <label for="inputPassword" class=" col-form-label">Today date</label>
        <div class="col-sm-10">
            <input type="date" @change="$emit('dateChanged', $event.target.value)" class="form-control" id="inputPassword">
        </div>
    </div>
</template>

<script>
export default {
    name: "CurrentDateForm",
    props: ['dateChanged'],
};
</script>

<style scoped>
.form-container {
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
}
</style>