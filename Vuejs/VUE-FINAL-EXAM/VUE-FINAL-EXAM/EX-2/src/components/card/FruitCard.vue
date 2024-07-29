<template>
    <div :class="fruit.date >= newCurrentDate ? 'green' : 'orange'" class="card-container mt-2">
        <div>
            <h2>{{ fruit.name }}</h2>
            <span v-if="fruit.isShow">Expiration date: {{ fruit.date }}</span>
        </div>
        <button v-if="!fruit.isShow" @click="$emit('showDetails', index)" type="button" class="btn btn-primary">Show Expiration Date</button>
        <button v-if="fruit.isShow" @click="$emit('showDetails', index)" type="button" class="btn btn-primary">Hide Expiration Date</button>
    </div>
</template>

<script>
export default {
    name: "FruitCard",
    emits: ['showDetails'],
    props: ['fruit', 'currentDate', 'index'],
    computed: {
        newCurrentDate() {
            return this.currentDate
        }
    }
};
</script>

<style scoped>
.card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    border-radius: 20px;
}

.green {
    background: green;
}

.orange {
    background: orange;
}
</style>