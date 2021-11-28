<template>
    <div class="form-flex">
        <input type="date" placeholder="Date" v-model="getNewDataOnList.date">
        <select v-model="getNewDataOnList.category"> 
            <option value="Food">Food</option>
            <option value="Education">Education</option>
            <option value="Transport">Transport</option>
        </select>
        <input placeholder="Price" v-model.number="getNewDataOnList.price">
        <button @click="save"> Save </button>
        </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  
    methods: {
        ...mapGetters([
            'getNewDataOnList'
        ]),
        ...mapMutations([
            'setNewDataOnPaymentsList'
        ]),
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