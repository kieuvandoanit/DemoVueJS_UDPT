<template>
  <div>
      <form action="" method="" class="add_product" v-on:submit.prevent="handleAddProduct">
      <label for="product_thumb" id="l_product_thumb">Hình ảnh:</label>
      <input type="text" id="product_thumb" v-model="url">
      <br>
      <label for="title" id="l_title">Tên sản phẩm:</label>
      <input type="text" id="title" v-model="title">
      <br>
      <label for="price" id="l_price">Giá sản phẩm:</label>
      <input type="text" id="price" v-model="price">
      <br>
      <input type="submit" value="Thêm sản phẩm" id="submit">
    </form>
    <hr>
    <h3>Thông tin sản phẩm</h3>
    <div class="img_thumb">
      <img :src="url" alt="">
    </div>
    <p class="id">ID sản phẩm: {{maxID}}</p>
    <p class="title">Tên sản phẩm: {{title}}</p>
    <p class="price">Giá sản phẩm: {{price}}</p>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data(){
    return {
      title: '',
      price: 0,
      url: '',
    }
  },

  methods: {
    ...mapActions(['addProduct']),
    handleAddProduct(){
      this.addProduct({
        id: this.maxID,
        title: this.title,
        price: this.price,
        img: this.url
      })

      this.title=''
      this.price= 0
      this.url = ''
    }
  },
  computed:{
    ...mapGetters(['maxID']),
    
  }
}
</script>

<style scoped>
    label, input{
    margin: 10px;
  }
  label#l_product_thumb{
    padding-right: 32px;
  }
  label#l_price{
    padding-right: 2px;
  }
  input{
    width: 500px;
  }
  input#submit{
    margin-left: 135px;
    background: blue;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 5px 0px;
  }
  input#submit:hover{
    background: rgb(124, 124, 165);
  }
  .img_thumb{
    width: 200px;
    height: 200px;
    border: 1px solid black;
  }
  .img_thumb img{
    width: 100%;
    height: auto;
    overflow: hidden;
  }
</style>