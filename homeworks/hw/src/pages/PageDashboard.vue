<template>
    <div>
    <div>
      <button @click="display">Add new cost +</button>
  <PaymentForm v-show="show"/>
    </div>
  <PaymentsList/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import PaymentForm from '../components/PaymentForm.vue'
import PaymentsList from '../components/PaymentsList.vue'


export default {
    components: {
        PaymentForm,
        PaymentsList
    },
     data(){
       return {
         show:false,
       }
   },
   computed: {
       ...mapGetters([
         'getCurrentPage'
       ])
     },
   methods: {
     ...mapActions([
       'fetchData'
     ]),

     display () {
       this.show = !this.show
     },
   },
   mounted () {
     this.fetchData()
   }
   }
    
</script>

<style scoped>

</style>