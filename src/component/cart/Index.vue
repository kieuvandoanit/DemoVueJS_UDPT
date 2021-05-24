<template>
  <div id="cart">
    <Header />
    <hr />
    <div class="sum_price">
      Tổng giá tiền cần thanh toán: {{sum_price}} USD
    </div>
    <ul class="list_cart">
      <li class="item row" v-for="cart in carts" :key="cart.id">
          <div class="col-md-6">
            <p class="title">{{ cart.title }}</p>
          </div>
          <div class="col-md-3">
            <p class="price">{{ cart.price }} USD</p>
          </div>
          <div class="col-md-2">
            <p class="number">{{cart.number}} chiếc</p>
          </div>
          <div class="col-md-1">
            <button class="delete" @click="deleteCart(cart)">Xóa</button>
          </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Header from "../Header";
export default {
  components: {
    Header,
  },
  computed: {
    ...mapGetters(["carts","sum_price"]),
  },
  methods: {
    ...mapActions(["deleteCart"]),
  },
};
</script>

<style scoped>
#cart {
  padding: 0;
}
.list_cart {
  padding: 0;
}
.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  background: rgb(211, 203, 203);
  border-radius: 10px;
}
.delete {
  background: red;
  color: white;
  border: none;
  padding: 15px 27px;
  border-radius: 10px;
}
.title {
  margin-left: 15px;
}
.number{
    padding: 15px 0px;
    margin: 0;
}
.title,
.price {
  margin-top: 15px;
}
</style>