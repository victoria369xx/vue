<template>
    <div class="list">
        <div class="list-header">
            <div> Date </div>
            <div> Category </div>
            <div> Price </div>
        </div>
        <div class="list-flex" v-for="item in getPaymentsList" :key="item.id">
        <div class="list-item"> {{item.date}}</div>
        <div class="list-item"> {{item.category}}</div>
        <div class="list-item"> {{item.price}}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'getPaymentsList'
        ])
    }
}
</script>
<style lang="scss" scoped>
.list {
    margin-top: 20px;
}
.list-flex{
    display: grid;
    width:400px;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
}
.list-header {
    display: grid;
    width:400px;
    grid-template-columns: 1fr 1fr 1fr;
     text-align: center;
     font-weight: bold;
     margin-bottom: 20px;
}
.list-item {
    margin-bottom: 10px;
}
</style>