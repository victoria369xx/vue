<template>
    <div>
    <div>
      <button @click="display">Add new cost +</button>
  <!-- <PaymentForm v-show="show"/> -->
   <Modal v-if="ModalFlag" modal="PaymentForm" />
    </div>
  <PaymentsList/>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
//import PaymentForm from '../components/PaymentForm.vue'
import PaymentsList from '../components/PaymentsList.vue'
import Modal from '../components/modalWindows/Modal.vue'


export default {
    components: {
       // PaymentForm,
        PaymentsList,
        Modal
    },
     data(){
       return {
         ModalFlag:false,
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
       this.ModalFlag = true
     },
   },
   mounted () {
     this.fetchData()
   }
   }
    
</script>

<style scoped>

</style>