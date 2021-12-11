<template>
<div>
  <div class="form-flex">
    <input type="text" placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model.number="price" />
    <button @click="setNewDataToList">Save</button>
  </div>
  <router-link to="/dashboard/add/payment/Education?price=200"> Add Category Education with Price 200 </router-link>
  <router-link to="/dashboard/add/payment/Food?price=140"> Add Category Food with Price 140 </router-link>
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
    }
  },
  computed: {
    getFormData() {
      return this.getFormDataToList
    }
  },
  mounted() {
    this.date = this.getDateNow()
    this.category = this.$route.path.split('/').pop()
    this.price = +this.$route.query.price
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
</style>