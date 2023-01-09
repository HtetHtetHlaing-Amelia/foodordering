<template>
<div>
    <!-- <router-link :to="{name: 'AddCategory'}" >
        <button class="btn btn-default btn-lg"> Admin's Category</button>
    </router-link>
    <br />
    <router-link :to="{name: 'AddMenu'}" >
        <button class="btn btn-default btn-lg"> Admin's Menu</button>
    </router-link> -->
    <v-row>
    <v-col cols="2">
        <sidebar_admin></sidebar_admin>
      </v-col>
    </v-row>
</div>

</template>
<script>
import sidebar_admin from '../../components/sidebar_admin.vue'
export default {
  
  components: {sidebar_admin },
}
</script>
<style>
    /* .btn {
        margin-top: 45px;
        margin-left: 45%;
        text-align:center;
        margin-bottom: 20px;
    } */
    
   
</style>