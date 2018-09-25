import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Home from './views/Home'
import Hello from './components/hello'
import World from './components/world'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/',
          component: World
        },
        {
          path: '/hello',
          name: 'hello',
          component: Hello
        },
        {
          path: '/world',
          name: 'world',
          component: World
        }
      ]
    }
  ]
})
