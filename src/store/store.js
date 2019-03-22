import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios"
Vue.use(Vuex)

export const store =new Vuex.Store({
    state: {
        banner:[],
        sData:[]
    },
    getters: {
        
    },
    mutations: {
        getData(state,res){
            state.banner = res.data.dataInfo.data;

        },
        getsData(state,res){
            state.sData=res.data.dataInfo
        }
    },
    actions: {
        getData(context,callback){
            Axios.get('/api/newData').then((res) =>{
                context.commit("getData",res)
            })
        },
        getsData(context,callback){
            Axios.get('/api/sData').then((res) =>{
                context.commit("getsData",res)
            })
        },
    }
})