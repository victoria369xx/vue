<template>
    <div class="pagination">
    <button v-for="(value, name) in getPaymentsList" :key="name" @click="selectPage(name)"> {{name}} </button>
    </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
      computed:{
          ...mapGetters ([
              'getPaymentsList'
          ]),
      },
      methods: {
          ...mapMutations([
              'setCurrentPage'
          ]),

          selectPage(n) {
            this.setCurrentPage(n)
          }
      }
      }

</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 20px;
}
</style>