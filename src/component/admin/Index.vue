<template>
  <div id="admin">
      <Header/>
      <hr>
    <ul class="todo_list">
      <li class="todo_item" v-on:click="set_trangthai">Thêm sản phẩm</li>
      <li class="todo_item" v-on:click="set_trangthai">Xóa sản phẩm</li>
    </ul>
    <hr>
    <Addproduct v-if="trangthai === true" />
    <DeleteProduct v-if="trangthai === false" />
  </div>
</template>

<script>
import Header from '../Header'
import Addproduct from './Add_product'
import DeleteProduct from './Delete_product'
import {mapActions, mapGetters} from 'vuex'
export default {
  components:{
    Header,
    Addproduct,
    DeleteProduct
  },
  created(){
    this.getProducts()
  },
  methods:{
    ...mapActions(['set_trangthai','getProducts'])
  },
  computed:{
    ...mapGetters(['trangthai'])
  }

}
</script>

<style scoped>
  .todo_list{
    display: flex;
    justify-content: space-between;
  }
  .todo_item{
    list-style: none;
    padding: 5px 5px;
    background: rgb(58, 68, 151);
    color: white;
    border-radius: 5px;
  }
  .todo_item:hover{
    cursor: pointer;
    background: rgb(88, 95, 161); 
  }
  
</style>