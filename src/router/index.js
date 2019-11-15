import Vue from 'vue'
import Router from 'vue-router'
import store from '../vuex/store'

/* eslint-disable */
const Home = () => import('@/components/pages/Home') // eslint-disable-line
const Programme = () => import('@/components/pages/Programme')
const Article = () => import('@/components/pages/Article')
const PracticalInformation = () => import('@/components/pages/PracticalInformation')
const Registration = () => import('@/components/pages/Registration')
//const HotelAccommodation = () => import('@/components/pages/HotelAccommodation')

/* eslint-enable */

// import store from '../vuex/store'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
      path: '/home',
      redirect: '/'
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/programme',
      name: 'programme',
      component: Programme
    },
    {
      path: '/articles/:slug',
      name: 'Article',
      component: Article
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration
    },
    {
      path: '/practical-information',
      name: 'practical-information',
      component: PracticalInformation
    }
    // ,
    // {
    //   path: '/hotel-accommodation',
    //   name: 'hotel-accommodation',
    //   component: HotelAccommodation
    // }
  ]
})

router.afterEach((to, from) => {
  if (store.state.base.isMobile === true) {
    store.dispatch('base/setDrawer', false, {
      root: true
    })
  }
})

export default router
