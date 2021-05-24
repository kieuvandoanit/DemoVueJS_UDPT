import axios from 'axios' 
const blog = {
    state:{
        blogs: [],
    },
    getters:{
        blogs: state => state.blogs
    },
    mutations:{
        SET_BLOGS(state, blogs){
           state.blogs = blogs 
        }
    },
    actions:{
        async getBlogs({commit}){
            try{
                const response = await axios.get('http://localhost:3000/blog')
                commit('SET_BLOGS',response.data)
            }catch(error){
                console.log(error)
            }
        }
    }
}

export default blog