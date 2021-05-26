<template>
  <div id="header">
      <div id="logo" class="col-md-2">
          <a href="#" class="logo_link">VueShop</a>
      </div>
      <div id="menu" class="col-md-8">
          <ul>
              <li>
                  <router-link tag="a" class="menu-link" to="/">Trang chủ</router-link>
                </li>
              <li>
                  <router-link tag="a" class="menu-link" to="/Blog">Blog</router-link>
                </li>
              <li>
                  <router-link tag="a" class="menu-link" to="/Admin">Admin</router-link>
              </li>
          </ul>
      </div>
      <div id="cart" class="col-md-2">
          <router-link tag="a" id="cart_link" to="/Cart">
            <img src="../assets/images/cart.jpg" alt="" id="cart_logo">
            <span class="number_cart">{{num_cart}}</span> 
          </router-link>
          
      </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['num_cart'])
    }

}
</script>

<style scoped>
    #header{
        padding: 10px 0px;
        display: flex;
        background-color: beige;
    }
    #logo>a{
        font-size: 25px;
        font-weight: 700;
        color: #6c2d2d;
    }
    #menu>ul{
        display: flex;
        list-style: none;
        justify-content: space-around;
        margin: 7px 125px;
        
    }
    #menu>ul>li>a{
        font-size: 17px;
    }
    a{
        text-decoration: none;
    }
    #cart{
        position: relative;
        display: flex;
        justify-content: flex-end;
        padding-right: 25px;
    }
    #cart_logo{
        width: 40px;
        height: auto;
    }
    .number_cart{
        background: red;
        padding: 1px 9px;
        color: white;
        border-radius: 50%;
        position: absolute;
        top: -7px;
        right: 5px;
    }
</style>