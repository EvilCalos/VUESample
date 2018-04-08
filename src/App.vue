<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h2>Products</h2>
    <ProductList/>
    <hr>
    <ShoppingCart/>
    <Login />
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import Login from "./components/Login.vue";
export default {
  components: { ProductList, ShoppingCart, Login }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
