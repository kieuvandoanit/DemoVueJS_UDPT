<template>
  <div>
      <form action="" v-on:submit.prevent="handleDeleteProduct">
          <label for="ID" id="id_Delete">Nhập ID cần xóa:</label>
          <input type="text" id="ID" v-model="id">

          <br>
          <input type="submit" id="delete" value="Xóa">
      </form>
      <hr>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  data(){
    return {
      id: ''
    }
  },
  computed:{
    product(){
      return this.findProduct(this.id);
    }
  },
  methods:{
    ...mapActions(['deleteProduct']),
    handleDeleteProduct(){
      this.deleteProduct(this.id)
    }
  }
}
</script>

<style scoped>
input, label{
    margin: 0px 5px;
}
#delete{
    margin-top: 10px;
    background: red;
    border: none;
    border-radius: 5px;
    padding: 10px 50px;
    color: white;
    margin-left: 140px;
}
#delete:hover{
    background: rgb(212, 73, 73);
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