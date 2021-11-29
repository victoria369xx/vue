<template>
    <div class="form-flex">
        <input type="date" placeholder="Date"  >
         <input placeholder="Category" >
        <input placeholder="Price">
        <button @click="setFormData"> Save </button>
        </div>
</template>

<script>
  import { mapMutations} from 'vuex'
export default {
    methods: {
        ...mapMutations([
            'setFormData'
        ]),

    getInput(){
        let userInput = {
            userDate: '2021/11/11',
            userCategory: 'fod',
            userPrice: 0
        }
          return userInput
         },
     setFormData(){
        this.setFormData(this.getInput())
        
    }
}
}
</script>

<style lang="scss" scoped>
    .form-flex {
        display: flex;
        flex-direction: column;
        width: 200px;
    }
    button {
        width: 100px;
    }
    
</style>