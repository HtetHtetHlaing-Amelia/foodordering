<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4 class="pt-3"> Edit Product</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6">
                <form>
                    
                    <div class="form-group">
                        <label>Menu ID</label>
                        <input type="text" v-model="menu_id" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" v-model="menu.name" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Image Url</label>
                        <input type="text"  v-model="menu.image" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" v-model="menu.price" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" v-model="menu.description" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label> Category</label>
                        <input type="text" class="form-control"/>
                        <select class="form-control">
                            <option v-for="category of categories"
                                    :key="category.id"
                                    :value="category.id"> {{category.categoryName}}</option>

                        </select>
                    </div>
                    <button type="button" class="btn btn-primary"
                            @click="editMenu" >Submit</button>
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
                menu:"",
                id: ""
            }
        },
        props: ["BASE_URL", "categories", "menus"],
        methods: {
            async editMenu() {
                console.log('menu', this.menu)
                await axios.post(`${this.BASE_URL}menu/update/{menuID}`,//change with backend
                    this.menu)
                    .then(() => {
                        this.$emit("fetchData");
                        this.$router.push({name: 'AdminMenu'})
                        swal({
                            text: "Menu has been updated successfully",
                            icon: "success"
                        })
                    }).catch(err => console.log('err', err));
            }
        },
        mounted() {
            this.id = this.$route.params.id;
            this.menu = this.menus.find(menu => menu.id == this.id)
        }
    }
</script>