<template>
  <ul>
    <li v-for="product in products">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button><span>{{name}}</span>
    </li>
  </ul>
  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters({
    products: "allProducts",
    name: "name"
  }),
  methods: mapActions(["addProductToCart"]),
  created() {
    this.$store.dispatch("getAllProducts");
  }
};
</script>