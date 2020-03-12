<template>
    <div>你好{{count}}
        <div>获取{{first}}</div>
        <button @click="getCount">计算</button>
    </div>
</template>

<script>
import store from "./store";
import { mapState } from 'vuex'

export default {
    data(){
        return{
            // count:0
        }
    },
    computed:{
        first(){
            return store.state.first;
        },
        // count(val){
        //     console.log('为什么',val);
        //     return store.state.count
        // }
        ...mapState({
           count:(state)=>{
               console.log('王八蛋',state);
               return state.count;
           }
        })
    },
    methods:{
        getCount(){
            store.commit('increment');
            store.commit('firstFun');
            console.log('店小二的春天',mapState,store);
        }
    }
}
</script>>