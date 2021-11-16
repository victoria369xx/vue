<template>
  <div id="app">
  <h1> Калькулятор </h1>
  <div>
     <div class="display">
       <input type="number"  v-model.number="operand1"/>
       <input type="number"  v-model.number="operand2"/>
     </div>
     <div class="keyboard">
         <button @click="sum">+</button>
         <button @click="diff">-</button>
         <button @click="div">/</button>
         <button @click="mult">*</button>
         <button @click="pow">Xy</button>
         <button @click="mod">%</button>
     </div>
     <div class="result"> <p>Результат: {{result}}</p></div>
  </div>

  </div>
</template>

<script>


export default {
  name: 'Calculator',
  data(){
       return {
           operand1: 0,
           operand2: 0,
           result: 0
       }
   },
   methods: {
     sum (){
       this.result = this.operand1 + this.operand2
     },
     diff(){
       this.result = this.operand1 - this.operand2
     },
     div(){
       if(this.operand2 == 0){
         this.result = "На ноль делить нельзя!"
       } else {
         this.result = (this.operand1 / this.operand2)
       }
  
     },
     mult(){
        this.result = this.operand1 * this.operand2
     },
     pow(){
       this.result = Math.pow(this.operand1, this.operand2)
     },
     mod(){
        this.result = (this.operand1 - (this.operand1 % this.operand2))/this.operand2
     }

   }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.keyboard {
  margin-top: 20px;
}
button {
  width: 40px;
  height: 40px;
}
.result {
  font-weight: bold
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}
</style>
