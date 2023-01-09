<template>
  <div class="card h-100 w-100">
    <div class="embed-responsive embed-responsive-16by9">
      <img
        class="card-img-top embed-responsive-item"
        :src="menu.imageURL"
        alt="Card image cap"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">{{ menu.name }}</h5>
      <p class="card-text">{{ menu.description.substring(0, 65) }}...</p>
      <router-link :to="{ name: 'EditMenu',params: {id: menu.id} }"
      v-show="$route.name == 'AdminProduct'">
        <button class="btn btn-primary">Edit</button></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuBox",
  props: ["menu"],
};
</script>
<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>