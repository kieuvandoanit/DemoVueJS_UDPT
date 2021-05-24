import axios from 'axios' 
const product = {
    state:{
        products: [],
    },
    getters:{
        products: state => state.products
    },
    mutations:{
        SET_PRODUCTS(state, products){
           state.products = products 
        }
    },
    actions:{
        async getProducts({commit}){
            try{
                const response = await axios.get('http://localhost:3000/product')
                commit('SET_PRODUCTS',response.data)
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default product