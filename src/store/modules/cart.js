const cart = {
    state: {
        carts: [],
        sum_price: 0
    },
    getters:{
        carts: state => state.carts,
        num_cart: state => state.carts.length,
        sum_price: state => state.sum_price
    },
    mutations:{
        ADD_CART(state, newCart){
            if(state.carts.find(cart=>cart.id === newCart.id) != null){
                for(var i = 0; i < state.carts.length;i++){
                    if(state.carts[i].id === newCart.id){
                        state.carts[i].number = state.carts[i].number+1;
                    }
                }
            }else{
                state.carts.unshift(newCart);
                state.carts[0].number = 1;
            }
        },
        DELETE_CART(state, d_cart){
            state.carts = state.carts.filter(cart => cart.id != d_cart.id)
        },
        SUM_PRICE(state){
            state.sum_price = 0;
            for(var i = 0; i<state.carts.length;i++){
                state.sum_price = state.sum_price + state.carts[i].price*state.carts[i].number;
            }
        }
    },
    actions:{
        addCart({commit}, newCart){
            commit('ADD_CART',newCart)
            commit('SUM_PRICE')
        },
        deleteCart({commit},d_cart){
            commit('DELETE_CART',d_cart)
            commit('SUM_PRICE')
        }
    }
}

export default cart