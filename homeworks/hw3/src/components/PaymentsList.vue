<template>
    <div>
        <div v-for="(item, index) in items" :key="index"> {{item}}</div>
    </div>
</template>

<script>
export default {
    props: {
        items: Array
    }
}
</script>
<style lang="scss" module>

</style>