<template>
  <div id="app" class="app">
  <header class="header"> My personal costs </header>
  <main>
  <PageDashboard/>
  <PageAbout/>
  <Page404/>
  </main>
  </div>
</template>

<script>

import {mapActions, mapGetters} from 'vuex'
import {PageDashboard, PageAbout, Page404} from './components/pages'

export default {
  name: 'App',
  components: {
  PageDashboard,
  PageAbout,
  Page404
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
