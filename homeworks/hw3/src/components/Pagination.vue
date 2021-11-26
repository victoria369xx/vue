<template>
    <div class="pagination">
    <button> Prev </button>
    <button v-for="(n, index) in pages" :key="index" @click="selectPage"> {{n}} </button>
    <button> Next </button>  
    </div>
</template>
<script>
export default {
      props: {
          pages: Number
          },
    data () {
        return {
            activePage: 1,
        }
    },
    methods: {
        selectPage(n){
            this.$emit('pageSelected', n)
        }
    }
    }

</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 20px;
}
</style>