const admin = {
    state:{
        trangthai: true,
    },
    getters:{
        trangthai: state => state.trangthai,
    },
    mutations:{
        SET_TRANGTHAI(state){
            state.trangthai = !state.trangthai
        }
    },
    actions:{
        set_trangthai({commit}){
            commit('SET_TRANGTHAI')
        }
    }
}
export default admin