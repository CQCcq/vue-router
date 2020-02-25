import Vue from 'vue'
import Router from 'vue-router'
import routes from './common/config/router.js'
// import A from './view/A.vue'
// import D from './view/D.vue'

Vue.use(Router)
console.log(666666,routes)
export default new Router({
    routes
    // routes:[
    //     {
    //         path:'',
    //         name:'home',
    //         redirect:()=>{
    //             return '/D';
    //         }
    //     },
    //     {
    //         path:'/A',
    //         name:'A',
    //         component:A
    //     },
    //     {
    //         path:'/D',
    //         name:'D',
    //         component:D,
    //     },
    //     {
    //         path:'/C',
    //         name:'C',
    //         component:()=>import('./view/C.vue')
    //     }
    // ]
})