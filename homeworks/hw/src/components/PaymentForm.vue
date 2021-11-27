<template>
    <div class="form-flex">
        <input type="date" placeholder="Date" v-model="date">
        <select v-model="category"> 
            <option value="Food">Food</option>
            <option value="Education">Education</option>
            <option value="Transport">Transport</option>
        </select>
        <input placeholder="Price" v-model.number="price">
        <button @click="save"> Save </button>
        </div>
</template>

<script>
export default {
    data () {
        return {
            date: '',
            category: '',
            price: 0,
        }
    },
    methods: {
        save () {
            const {date, category, price} = this
            this.$emit('addToList', {date, category, price})
             this.date = this.category = this.price = ''
        },
    },
}
</script>

<style lang="scss" scoped>
    .form-flex {
        display: flex;
        flex-direction: column;
        width: 200px;
    }
    button {
        width: 100px;
    }
    
</style>