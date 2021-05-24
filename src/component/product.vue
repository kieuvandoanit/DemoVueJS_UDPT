<template>
  <div class="product">
      <div class="product_thumb">
          <a href=""><img v-bind:src="product.img" alt=""></a>
      </div>
      <div class="product-title">
          <a href="">{{product.title}}</a>
      </div>
      <div class="product-price">
          {{product.price}} USD
      </div>
      <div class="add">
          <button @click="addCart(product)">Thêm vào giỏ hàng</button>
      </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    props:{
        product:{
            type: Object,
            default: null
        }
    },
    methods:{
        ...mapActions(['addCart']),
    }
}
</script>

<style scoped>
    .product{
        margin-top: 15px;
        width: 100%;
        border: 1px solid rgb(99, 99, 165);
        border-radius: 10px;
        background: rgb(210, 238, 237);
    }
    .product_thumb a img{
        width: 100%;
    }
    .product-title{
        text-align: center;
    }
    .product-title a{
        text-decoration: none;
        color: black;  
        font-size: 17px;
        font-weight: 600;
    }
    .product-title a:hover{
        color: rgb(63, 61, 61);
    }
    .product-price{
        text-align: center;
        color: rgb(182, 84, 84);
        font-weight: 600;
    }
    .add{
        text-align: center;
        margin-bottom: 10px;
    }
    .add button{
        border: none;
        background: rgb(138, 83, 83);
        color: white;
        padding: 5px 20px;
        border-radius: 10px;
    }
    .add button:hover{
        border-radius: 10px;
        background: red;
    }
</style>