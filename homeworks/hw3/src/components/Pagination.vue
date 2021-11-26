<template>
    <div class="pagination">
    <button> Prev </button>
    <button v-for="(n, index) in pages" :key="index"> {{n}} </button>
    <button> Next </button>  
    </div>
</template>
<script>
export default {
      props: {
          pages: Number
          },
}

</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 20px;
}
</style>