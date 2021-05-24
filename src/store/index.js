import Vue from 'vue'
import Vuex from 'vuex'



import blog from './modules/blog'
import product from './modules/product'
import cart from './modules/cart'
Vue.use(Vuex)
const storeData={
    modules: {
        blog,
        product,
        cart
    }
}

const store = new Vuex.Store(storeData)

export default store