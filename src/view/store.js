import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export default new Vuex.Store({
    state:{
        //用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在
        //也就是相当于data对象，一个对象笼络所有资源
        count:0,
        first:1
    },
    mutations:{
        increment(state){
            state.count++
        },
        firstFun(state){
            state.first++
        }
    }
})