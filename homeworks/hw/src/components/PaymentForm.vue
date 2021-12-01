<template>
  <div class="form-flex">
    <input type="date" placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model.number="price" />
    <button @click="setNewDataToList">Save</button>
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
       this.addFormDataToList(this.getFormDataToList.value) // payload дает ошибку mappedGetters
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
</style>