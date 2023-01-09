<template>
  <div>
    <div id="home">
      <div id="background-div" class="page-holder bg-cover">
        <div class="container py-4">
          <header class="text-left text-white py-4">
            <h3 class="mb-4 rounded" id="heading">
              <a href="#start-shopping" class="bg-white px-2 py-2 rounded">
                Start Ordering</a
              >
            </h3>
          </header>
        </div>
      </div>
    </div>
    <!--    display menus-->
    <div class="container" py-3>
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="pt-3">Top Menus</h2>
        </div>
      </div>
      <div class="row">
        <div
          v-for="index in this.menuSize"
          :key="index"
          class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
        >
          <MenuBox :menu="menus[index - 1]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuBox from '../components/MenuBox.vue'
export default {
  name: "HomeView",
  components: { MenuBox},
   props: ["menus"],
  data() {
    return {
      menuSize: 0
    }
  },
  mounted() {
    this. menuSize = Math.min(1, this.menus.length );
  }
};
</script>
<style scoped>
.page-holder {
  min-height: 90vh;
}
.bg-cover {
  background-size: cover !important;
}
#background-div {
  background: url("../assets/home.png");
}
#heading {
  font-weight: 400;
}

</style>