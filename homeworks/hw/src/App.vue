<template>
  <div id="app" class="app">

  <header class="header"> My personal costs </header>
  <div class="page-links">
  <router-link class="link" to="/dashboard"> Dashboard </router-link>
  <router-link class="link" to="/about"> About </router-link>  
  <router-link class="link" to="/404"> 404 </router-link>
  </div>
  <main>
 <router-view/>
  </main>
  <transition name="fade">
  <Modal v-if="modalShown" :name="modalShown" />
  </transition>
  </div>
</template>

<script>
import Modal from './components/modalWindows/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal
  },
  data () {
    return {
      modalShown: false
    }
  },
  methods: {
    onShown (name) {
      this.modalShown = name
    },
    onClose() {
      this.modalShown = ''
    }
  },

  mounted () {
    this.$modal.EventBus.$on('show', this.onShown)
    this.$modal.EventBus.$on('close', this.onClose)
  },
  beforeDestroy () {
    this.$modal.EventBus.$off('show', this.onShown)
    this.$modal.EventBus.$off('close', this.onClose)
  }
}

</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

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
.page-links {
  margin-top: 20px;
}
.link {
  margin-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  font-weight: bold;
}
.link:hover {
 border-bottom: 2px solid black;
}

</style>
