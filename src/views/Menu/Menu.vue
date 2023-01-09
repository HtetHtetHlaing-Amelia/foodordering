<template>
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h4> Our Menus</h4>
                <router-link :to="{name: 'AddMenu'}" style="float: right">
                    <button class="btn" >
                        Add Menu
                    </button> </router-link>
            </div>
        </div>
        <div class="row">
<!--            display all the products in productbox component-->
            <div v-for="menu of menus" :key="menu.id"
                 class="col-md-6 col-xl-4 col-12 pt-3 d-flex">
                <MenuBox :menu="menu"/>
            </div>
        </div>
    </div>
</template>
<script>
    import MenuBox from "../../components/MenuBox";
    export default {
        components: {MenuBox},
        props:["menus"]
    }
</script>