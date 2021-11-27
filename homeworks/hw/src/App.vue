<template>
  <div id="app" class="app">
  <header class="header"> My personal costs </header>
  <main>
    <div>
      <button @click="display">Add new cost +</button>
  <PaymentForm @addToList="onDataAdded" v-show="show"/>
    </div>
  <PaymentsList/>
  <Pagination/>
  </main>
  </div>
</template>

<script>

import PaymentsList from './components/PaymentsList.vue'
import PaymentForm from './components/PaymentForm.vue'
import Pagination from './components/Pagination.vue'
import {mapActions} from 'vuex'

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
       }
   },
   methods: {
     ...mapActions([
       'fetchData'
     ]),
     onDataAdded (data) {
       this.paymentsList.push(data)
     },
     display () {
       this.show = !this.show
     },
   },
   mounted () {
     this.fetchData()
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
