<template>
<div>
  <div class="form-flex">
    <p v-if="errors.length">
       <ul>
      <li v-for="error in errors" :key="error">{{ error }}</li>
    </ul>
    </p>
    <input type="date" placeholder="Date" v-model="date" />
    <input placeholder="Category" class="category" v-model="category" />
    <input placeholder="Price" v-model.number="price"  />
    <button @click="setNewDataToList">Save</button>
  </div>
  <h4> Frequently used payments: </h4>
  <div class="link-wrapper">
    <div @click="addFastPayment">
      <router-link to="/dashboard/add/payment/Education?price=200" class="link"> Add Category Education with Price 200 </router-link>
    </div>
    <div @click="addFastPayment">
      <router-link to="/dashboard/add/payment/Food?price=140" class="link"> Add Category Food with Price 140 </router-link>
    </div>
    <div @click="addFastPayment">
      <router-link  to="/dashboard/add/payment/Internet?price=860" class="link"> Add Category Internet with Price 860 </router-link>
    </div>
  </div>
  </div> 
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {
      date: "",
      category: "",
      price: 0,
      errors: [],
    };
  },
  methods: {
    ...mapMutations(["setFormData", "addFormDataToList"]),
    ...mapGetters(['getFormDataToList']),

    getInput() {
      return {
        date: this.date,
        category: this.category,
        price: this.price,
      };
    },
    setNewData() {
      this.setFormData(this.getInput());
    },
    setNewDataToList(){
        this.setNewData()
         this.addFormDataToList(this.getFormData());
          this.date = "",
          this.category = "",
          this.price = 0
    },
    getDateNow (){
      const currentDate = new Date();
      const d = currentDate.getDate();
      const m = currentDate.getMonth() + 1;
      const y = currentDate.getFullYear();
      return `${y}/${m}/${d}`;
    },
    addFastPayment(){
      const data = {
        date: this.getDateNow(),
        category : this.$route.path.split('/').pop(),
        price : +this.$route.query.price
      }
      this.addFormDataToList(data)
    }
  },
  mounted() {
    if (this.id) {
      const item = this.getList.find(p => p.id === p.id)
      if (item){
        this.date = item.date
        this.category = item.category
        this.price = item.price
      }
    }
  },
  computed: {
    getFormData() {
      return this.getFormDataToList
    },
    getList() {
      return this.getPaymentsList
    }
  }
};
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
.category {
text-transform: capitalize;
}
.link-wrapper {
  display: flex;
  flex-direction: column;
}
.link {
  text-decoration: none;
  color:black;
}
.link:hover {
  color: green
}
</style>