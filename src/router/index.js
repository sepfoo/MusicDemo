import Vue from 'vue'

import VueRouter from 'vue-router'

import viewLayout from '@/views/Layout'

import viewHome from '@/views/Home';
import viewSearch from '@/views/Search'
Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        redirect:"/layout"
    },
    {
        path:"/layout",
        redirect:"/layout/home",
        component:viewLayout,
        children:[
            {
                path:'home',
                component:viewHome,
                meta:{
                    title:'首页',
                    isSearch:false
                }
            },
            {
                path:'search',
                component:viewSearch,
                meta:{
                    title:'搜索',
                    isSearch:true
                }
            }
        ]
    }
]
const router = new VueRouter({
    routes
})
export default router
