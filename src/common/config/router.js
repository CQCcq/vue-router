let routes = [
    {
        path:'',
        name:'home',
        redirect:()=>import('../../view/A.vue')
    },
    {
        path:'/A',
        name:'A',
        component:()=>import('../../view/A.vue')
    },
    {
        path:'/B',
        name:'B',
        component:()=>import('../../view/B.vue'),
        children:[
            {
                path:'/B/C',
                name:'C',
                component:()=>import('../../view/C.vue')
            }
        ]
    },
    {
        path: '/D',
        name: '/D',
        component: () => import('../../view/D.vue')
    }

]

export default routes