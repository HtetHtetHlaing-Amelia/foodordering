<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h3 class="pt-3">Add Category</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
           <div class="form-group">
            <label>Category's ID</label>
            <textarea type="text" class="form-control" v-model="id" />
          </div>
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" v-model="categoryName" />
          </div>
         
          <div class="form-group">
            <label>Image</label>
            <input type="text" class="form-control" v-model="image" />
          </div>
          <button type="button" class="btn btn-primary" @click="addCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
const sweetalert = require("sweetalert");
export default {
  data() {
    return {
      id: "",
      categoryName: "",
      image: "",
    };
  },
  methods: {
    addCategory() {
      console.log(this.categoryId, this.categoryName);
      const newCategory = {
       categoryId:this.categoryId,
       categoryName:this.categoryName,
       image:this.image

      };
     const BASE_URL = "http://localhost:8083/";

      axios({
        method: "post",
        url: `${BASE_URL}/category/create`,
        data: JSON.stringify(newCategory),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(() => {
          sweetalert({
            text: "Category added successfully",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped></style>