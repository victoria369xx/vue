<template>
  <div class="wrapper" v-if="shown">
    <div class="overlay"></div>
    <header> {{shown}} </header>
    <PaymentForm v-if="shown === 'PaymentForm'" />
    <button @click="onClose">Close</button>
  </div>
</template>

<script>
import PaymentForm from '../PaymentForm.vue'

export default {
  components: {
      PaymentForm
  },
  data () {
    return {
      shown: ''
    }
  },
  methods: {
    onShow ({name}) {
      this.shown = name
    },
    onClose(){
      this.shown = ''
    }
  },
  mounted () {
    this.$modal.EventBus.$on('show', this.onShow)
  }
}

</script>

<style lang="scss" scoped>
.wrapper {
  border: 1px solid red;
}
</style>