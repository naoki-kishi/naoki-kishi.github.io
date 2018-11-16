import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/pages/Top'
import About from '@/pages/About'
import Languages from '@/pages/Languages'
import Works from '@/pages/Works'
import Frameworks from '@/pages/Frameworks'
import Contacts from '@/pages/Contacts'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/languages',
      name: 'Languages',
      component: Languages
    },
    {
      path: '/frameworks',
      name: 'Frameworks',
      component: Frameworks
    },
    {
      path: '/works',
      name: 'Works',
      component: Works
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
