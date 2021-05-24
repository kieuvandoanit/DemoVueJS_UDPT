<template>
  <div id="home">
    <Header />
    <hr />
    <div class="row">
          <div class="col-md-3" 
            v-for="product in products"
            :key="product.id">
            <Product v-bind:product="product"/>
          </div>
        </div>
  </div>
</template>

<script>
import Header from "../Header";
import Product from "../product";

import {mapGetters, mapActions} from 'vuex'

export default {
  name: "Home",
  components: {
    Header,
    Product,
  },
  created(){
    this.getProducts()
  },
  methods:{
    ...mapActions(['getProducts'])
  },
  computed:{
    ...mapGetters(['products'])
  }
};
</script>

<style scoped>
  #home{
    padding: 0;
  }
</style>