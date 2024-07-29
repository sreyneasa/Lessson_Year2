<template>
    <div class="form-container mb-3 mt-3 row">
        <label for="inputPassword" class=" col-form-label">Fruit</label>
        <div class="col-sm-9">
            <input v-model="name" type="text" class="form-control" id="inputPassword">
        </div>

        <label for="inputPassword" class=" col-form-label">Expiration date</label>
        <div class="col-sm-9 mt-2">
            <input v-model="date" type="date" class="form-control" id="inputPassword">
        </div>
        <div class="mt-4 btn">
            <button @click="add" type="button" class="btn btn-primary">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "FruitForm",
    emits: ['fruitAdded'],
    data() {
        return {
            name: '',
            date: ''
        }
    },
    methods: {
        add() {
            if (this.name && this.date) {
                this.$emit('fruitAdded', { name: this.name, date: this.date, isShow: false });
                this.name = '';
                this.date = '';
            }
        }
    }
};
</script>

<style scoped>
.form-container {
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
}
.btn {
    width: 100%;
}
</style>