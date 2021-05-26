import axios from 'axios' 
const product = {
    state:{
        products: [],
    },
    getters:{
        products: state => state.products,
        maxID(state){
            var max = 0;
            for(var i = 0; i< state.products.length; i++){
                if(parseInt(state.products[i].id) > max){
                    max = parseInt(state.products[i].id)
                }
            }
            return max + 1
        },
        
    },
    mutations:{
        SET_PRODUCTS(state, products){
           state.products = products 
        },
        ADD_PRODUCT(state, product){
            state.products.unshift(product)
        },
        DELETE_PRODUCT(state, id){
            for(var i = 0; i< state.products.length;i++){
                if(state.products[i].id === id){
                    state.products.splice(i, 1);
                }
            }
        },
    },
    actions:{
        async getProducts({commit}){
            try{
                const response = await axios.get('http://localhost:3000/product')
                commit('SET_PRODUCTS',response.data)
            }catch(error){
                console.log(error)
            }
        },
        async addProduct({commit},newProduct){
            try{
                const res = await axios.post('http://localhost:3000/product',newProduct)
                if(res.status === 201){
                    alert("Thêm sản phẩm thành công!");
                }
                commit('ADD_PRODUCT', newProduct);
            }catch(error){
                console.log(error)
            }
        },
        async deleteProduct({commit}, id){
            try{
                const res = await axios.delete('http://localhost:3000/product/'+id)
                if(res.status === 200){
                    alert("Xóa sản phẩm thành công!");
                }
                const response = await axios.get('http://localhost:3000/product')
                commit('SET_PRODUCTS',response.data)
            }catch(error){
                console.log(error)
            }
        },
    }
}

export default product