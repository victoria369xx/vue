<template>
  <div id="app">
  <h1> Калькулятор </h1>
  <div>
     <div class="display">
       <input type="number"  v-model.number="operand1"/>
       <input type="number"  v-model.number="operand2"/>
     </div>
     <div class="keyboard">
         <button v-for="operation in operations" :key="operation" :disabled="operand1=== '' || operand2 === ''"
          @click="calculate(operation)">{{operation}}</button>
     </div>
     <div class="numberKeyboard">
          <input type="checkbox" id="checkbox" v-model="numbersKeyboard.checked">
          <label for="checkbox">{{ numbersKeyboard.message}}</label>
          <div class="inputBtns" v-show="numbersKeyboard.checked">
              <button  v-for="btn in numberBtns" :key="btn" :value="btn" @click="getBtnValue">{{btn}}</button>
              <button @click="del"> del </button>
                    <div>
                  <input type="radio" id="one">
                  <label for="one">Операнд 1</label>
                  <input type="radio" id="two">
                  <label for="two">Операнд 2</label>
                </div>
          </div>
     </div>
     <div class="result"> <p>Результат: {{result}}</p>
     <p class ="error" v-show="error">{{error}}</p>
     </div>
     <div class="logs">
     <p> <b>История операций:</b></p>
     <div v-for="(log, id) in logs" :key="id">{{ log }}</div>
   </div>

  </div>

  </div>
</template>

<script>


export default {
  name: 'Calculator',
  data(){
       return {
          operations: ['+', '-', '/', '*'],
           operand1: '',
           operand2: '',
           result: 0,
           error: '',
           logs: {},
           numbersKeyboard: {
             checked: true,
             message: 'Отобразить экранную клавиатуру'
           },
           numberBtns: [1,2,3,4,5,6,7,8,9,0]
       }
   },
   methods: {
     add (){
       this.result = this.operand1 + this.operand2
     },
     substract(){
       this.result = this.operand1 - this.operand2
     },
     divide(){
      const { operand1, operand2 } = this
        if (operand2 === 0) {
         this.result = ''
         this.error = 'Делить на 0 нельзя!'
        } else {
        this.result = operand1 / operand2
        }
     },
     multiply(){
        this.result = this.operand1 * this.operand2
     },
     calculate (operation = '+') {
       this.error = ''
       switch (operation) {
       case '+':
         this.add()
         break;
       case '-':
         this.substract()
         break;
       case '*':
         this.multiply()
         break;
       case '/':
         this.divide()
         break;
     }
      const key = Date.now()
      let value = `${this.operand1}${operation}${this.operand2}=${this.result}`
      if (this.error){
        value = `${this.operand1}${operation}${this.operand2}=${this.error}`
      }
      this.$set(this.logs, key, value)
     },
     getBtnValue () {
       let value = event.target.value
       console.log(value)
     },
     del (){
       console.log('im future button!')
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
.error {
  color: red
}
.numberKeyboard, .inputBtns {
  margin-top:20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}
</style>
