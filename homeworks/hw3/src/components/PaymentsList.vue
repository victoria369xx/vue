<template>
    <div class="list">
        <div class="list-header">
            <div> Date </div>
            <div> Category </div>
            <div> Price </div>
        </div>
        <div class="list-flex" v-for="(item, index) in items" :key="index">
        <div class="list-item"> {{item.date}}</div>
        <div class="list-item"> {{item.category}}</div>
        <div class="list-item"> {{item.price}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>
<style lang="scss" scoped>
.list {
    margin-top: 20px;
}
.list-flex{
      width: 400px;
     display: flex;
     justify-content: space-between;
}
.list-header {
    width: 400px;
     display: flex;
     justify-content: space-between;
     text-align: center;
     font-weight: bold;
}
.list-item {
    margin-bottom: 10px;
}
</style>