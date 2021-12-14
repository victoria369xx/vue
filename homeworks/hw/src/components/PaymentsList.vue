<template>
    <div class="list">
        <div class="list-header">
            <div> Date </div>
            <div> Category </div>
            <div> Price </div>
        </div>
        <div class="list-flex" v-for="(item, index) in currentElements" :key="index">
            <div>{{item.date}}</div>
            <div>{{item.category}}</div>
            <div>{{item.price}}</div>
        </div>
        <Pagination :length="getPaymentsList.length" :n="n"  @paginate="onPaginate" />
    </div>
</template>

<script>
import Pagination from './Pagination.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        Pagination
    },
    data() {
        return {
            page: 1,
            n: 5,
        }
    },
    computed: {
        ...mapGetters([
            'getPaymentsList'
        ]),
        currentElements() {
            const {n, page} =  this
            return  this.getPaymentsList.slice(n * (page - 1), n * (page - 1) + n )
        }
    },
    methods: {
        onPaginate (p){
            this.page = p
        }
},
            mounted(){
                this.$modal.show('PaymentForm')
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