<template>
    <div class="pagination">
    <button> Prev </button>
    <button > btn </button>
    <button> Next </button>  
    </div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
      methods:{
          ...mapGetters ([
              'getPaymentsList'
          ]),
      },
}

</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 20px;
}
</style>