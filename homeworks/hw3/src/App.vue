<template>
  <div id="app" class="app">
  <header class="header"> My personal costs </header>
  <main>
    <div>
      <button @click="display">Add new cost +</button>
  <PaymentForm @addToList="onDataAdded" v-show="show"/>
    </div>
  <PaymentsList @pageSelected="switchPage" :items="paymentsList"/>
  <Pagination :pages="paymentsListLength"/>
  </main>
  </div>
</template>

<script>

import PaymentsList from './components/PaymentsList.vue'
import PaymentForm from './components/PaymentForm.vue'
import Pagination from './components/Pagination.vue'

export default {
  name: 'App',
  components: {
  PaymentsList,
  PaymentForm,
  Pagination
},
  data(){
       return {
         show:false,
          paymentsList: [
            { id: 1,
              date:'2021-11-25',
              category: 'Education',
              price: 450
            },
            { id: 2,
              date:'2021-11-22',
              category: 'Internet',
              price: 300
            },
            { id: 3,
              date:'2021-11-21',
              category: 'Food',
              price: 120
            },
               {
              id: 4,
              date:'2021-11-20',
              category: 'Education',
              price: 450
            },
            {id: 5,
              date:'2021-11-22',
              category: 'Internet',
              price: 300
            },
            { id: 6,
              date:'2021-11-22',
              category: 'Food',
              price: 120
            }
            ],
            paymentsListLength: 0,
            filteredPaymentsList:[]
       }
   },
   methods: {
     onDataAdded (data) {
       this.paymentsList.push(data)
     },
     display () {
       this.show = !this.show
     },
     switchPage (n){
       if (n == 1) {
           this.filteredPaymentsList = this.paymentsList.filter((obj)=>{
             return obj.id <=3
           }) }
           if (n == 2) {
           this.filteredPaymentsList = this.paymentsList.filter((obj)=>{
             return obj.id >3
           })
       }
  
   },
   mounted () {
     this.paymentsListLength = Math.ceil(this.paymentsList.length/3)
   }
   }
}
</script>

<style lang="scss" scoped>
main {
  margin-top: 20px;
}
.app {
  max-width: 1400px;
  margin: 0 auto;
}
.header {
  margin-top: 20px;
  font-size: 30px;
  font-weight: bold;
}
</style>
