import Vue from 'vue'
import Vuex from 'vuex'



import blog from './modules/blog'
import product from './modules/product'
import cart from './modules/cart'
import admin from './modules/admin'
Vue.use(Vuex)
const storeData={
    modules: {
        blog,
        product,
        cart,
        admin,
    }
}

const store = new Vuex.Store(storeData)

export default store