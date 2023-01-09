<template>
  <div>
    <Navbar />

    <router-view :BASE_URL="BASE_URL" :categories="categories" :menus="menus">
    </router-view>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue"
import axios from "axios";
export default {
  components: { Navbar,Footer },
  data() {
    return {
      BASE_URL: "http://localhost:8083/",
      menus: null,
      categories: null,
    };
  },
  methods: {
    async fetchData() {
      // api call to get all the categories
      await axios
        .get(this.BASE_URL + "category/list")
        .then((res) => {
          this.categories = res.data;
        })
        .catch((err) => console.log("err", err));
      

      // api call to get the products
      await axios
        .get(this.BASE_URL + "menu/list")
        .then((res) => {
          this.menus = res.data;
        })
        .catch((err) => console.log("err", err));
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #94bbe1;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

Navbar