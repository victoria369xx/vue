<template>
    <div class="wrapper" v-if="shown" :style="styles">
        <div v-for="item in items" 
        :key="item.text"
        @click="onClick(item)">
            {{item.text}}
            </div>
   </div>
</template>

<script>
export default {
    data(){
        return {
            items: [],
            shown: false,
            xPos : 0,
            yPos : 0
        }
    },
    methods: {
        onClick(item){
            item.action()
        },
        onShow({items, caller }){
            this.shown =true
            this.items = items

            this.setPosition (caller)
        },
        onClose(){
            this.shown = false
            this.items = []
        },
        setPosition (caller) {
            const computed = caller.getBoundingClientRect()
            this.xPos = computed.left
            this.yPos = computed.top
        }
    },
    computed: {
        styles (){
            return {
                top: `${this.yPos}px`,
                left: `${this.xPos}px`
            }
        }
    },
    mounted (){
        this.$context.EventBus.$on('show', this.onShow)
        this.$context.EventBus.$on('close', this.onClose)
    },
    beforeDestroy(){
        this.$context.EventBus.$off('show', this.onShow)
        this.$context.EventBus.$off('close', this.onClose)
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    background-color: #eee;
    position: absolute;
}
</style>