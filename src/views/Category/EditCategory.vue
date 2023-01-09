<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">Edit Category</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <form>
          <div class="form-group">
            <label>Category ID</label>
            <input type="text" v-model="category.categoryId" class="form-control" />
          </div>
          <div class="form-group">
            <label>Category's Name</label>
            <input type="text"  v-model="category.categoryName" class="form-control" />
          </div>
          <div class="form-group">
            <label>Image URL</label>
            <input type="text" v-model="category.image" class="form-control" />
          </div>
          <button type="button" class="btn btn-primary" @click="editCategory">
            Submit
          </button>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        data() {
            return {
                category: null,
                id: null
            }
        },
        props: ["BASE_URL", "categories"],
        methods: {
            async editCategory() {
                //delete this.category["menus"]
                console.log('category', this.category)
                await axios.post(`${this.BASE_URL}category/update/${this.id}`,
                    this.category)
                .then(() => {
                    this.$emit("fetchData");
                    this.$router.push({name: 'Category'})
                    swal({
                        text: "category has been updated successfully",
                        icon: "success"
                    })
                }).catch(err => console.log('err', err));
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.category = this.categories.find(category => category.id == this.id)
        }
    }
</script>
<style scoped>

</style>