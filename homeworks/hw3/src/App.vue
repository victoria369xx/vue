<template>
  <div id="app" :class="[$style.app]">
  <header :class="[$style.header]"> My personal costs </header>
  <main>
  <PaymentForm @addToList="onDataAdded"/>
  <PaymentsList :items="paymentsList"/>
  </main>
  </div>
</template>

<script>

import PaymentsList from './components/PaymentsList.vue'
import PaymentForm from './components/PaymentForm.vue'
export default {
  name: 'App',
  components: {
  PaymentsList,
  PaymentForm
},
  data(){
       return {
          paymentsList: [
            {
              date:'21.11.2021',
              category: 'Education',
              price: 450
            },
            {
              date:'22.10.2021',
              category: 'Internet',
              price: 300
            },
            {
              date:'01.11.2021',
              category: 'Food',
              price: 120
            }
            ]
       }
   },
   methods: {
     onDataAdded (data) {
       this.paymentsList.push(data)
     }
   }
}
</script>

<style lang="scss" module>
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
