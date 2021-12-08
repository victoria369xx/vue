<template>
    <div class="pagination">
    <button v-for="i in amount" :key="i" @click="onClick(i)"> {{i}} </button>
    </div>
</template>
<script>

export default {
    props: {
        length: Number,
        n: Number
    },
    computed: {
        amount () {
            return Math.ceil(this.length / this.n)
        }
    },
    methods: {
        onClick (p) {
            this.$emit('paginate', p)
        }
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    margin-top: 20px;
}
</style>