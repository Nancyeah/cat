import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import catIndex from '@/components/catIndex'
//import cart from '@/components/cart'

Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }*/
    {
      path: '/',
      name: 'catIndex',
      component: catIndex
    },
    /*{
      path: '/',
      name: 'cart',
      component: cart
    }*/
  ]
})
