/*global Vue*/
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import recommend from '@/components/recommend/recommend'
import singer from '@/components/singer/singer'
import seniorty from '@/components/seniorty/seniorty'
import search from '@/components/search/search'
import user from '@/components/user/user'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path:'/',
      redirect:'recommend'},
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/recommend',
      name:'recommend',
      component:recommend
    },
  
    {
      path:'/seniorty',
      name:'seniorty',
      component:seniorty
    },{
      path:'/singer',
      name:'singer',
      component:singer
    },{
      path:'/search',
      name:'search',
      component:search
    },{
      path:'/user',
      name:'user',
      component:user
    }

  ]
})
