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
     showFormFromContext (){
       this.show = true
     }
   },
   mounted () {
     this.fetchData();
     this.$context.EventBus.$on('editForm', this.showFormFromContext)
   },
   beforeDestroy(){
     this.$context.EventBus.$off('editForm', this.showFormFromContext)
   }
   }
    
</script>

<style scoped>

</style>