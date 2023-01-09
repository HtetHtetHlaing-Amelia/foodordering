<template>
<div>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4>Add New Menu</h4>
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
                        <input type="text" v-model="name" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Image Url</label>
                        <input type="text"  v-model="image" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Price</label>
                        <input type="number" v-model="price" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <input type="text" v-model="description" class="form-control" >
                    </div>
                    <div class="form-group">
                        <label>Category</label>
                        <select class="form-control" v-model="categoryId" required>
                            <option v-for="category in categories" :key="category.id"
                                    :value="category.id">{{ category.categoryName }}</option>
                        </select>
                    </div>
                    <button type="button" class="btn btn-primary" @click="addMenu">Add Menu</button>
                </form>
            </div>
            <div class="col-3"></div>
        </div>

<!--        Form-->
    </div>
</div>
</template>
<script>
    import axios from 'axios'
    import swal from 'sweetalert'
    export default {
        props: ["BASE_URL", "categories"],
        data() {
            return {
                menu_id: null,
                 name: null,
                 image: null,
                 price: null,
                  description: null,
                categoryId: null
               
               
                
                
            }
        },
        methods: {
            addMenu() {
                const newMenu = {
                    menu_id:this.menu_id,
                    name:this.name,
                    image:this.image,
                    price:this.price,
                  description:  this.description,
                  categroyId:this.categoryId
                };

                axios.post(this.BASE_URL+"menu/save", newMenu)// change with backend
                .then(() => {
                    this.$router.push({name: 'AdminMenu'});
                    swal({
                        text: "Menu added",
                        icon: "success"
                    })
                }).catch((err)=> {
                    console.log("err", err);
                })


            }
        }
    }
</script>