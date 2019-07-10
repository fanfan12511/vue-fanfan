import Vue from 'vue'
import Router from 'vue-router'

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const index = r => require.ensure([], () => r(require('@/page/index')), 'index');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const cookList = r => require.ensure([], () => r(require('@/page/cookList')), 'cookList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');

Vue.use(Router)

const routes = [
    {
        path:'/',
        component:login
    },
    {
        path:'/index',
        component:index,
        name:'index',
        children:[
            {
                path:'/shopList',
                name:'shopList',
                component:shopList,
                meta:['西式营养管理','店铺管理']
            },
            {
                path:'/foodList',
                name:'foodList',
                component:foodList,
                meta:['西式营养管理','食物管理']
            },
            {
                path:'/cookList',
                name:'cookList',
                component:cookList,
                meta:['西式营养管理','食谱管理']
            }
        ]
    }
]
export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production',
})
