<template>
  <div id="Product_list">
      <Header/>
      <hr>
      <div class="list">
        <div class="row">
          <div class="col-md-3" 
            v-for="product in products"
            :key="product.id">
            <Product v-bind:product="product"/>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Header from '../Header'
import Product from '../product'
export default {
  components:{
    Header,
    Product
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
}
</script>

<style>

</style>