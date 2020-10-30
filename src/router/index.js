import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/router/blank.vue'
import Index from '@/page/index.vue'
import changeCity from '@/page/changeCity.vue'
import goodList from '@/page/goodlist.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect: '/index',
      children: [
        {
          name: 'goods',
          path: '/s/:name',
          component: goodList
        },
        {
          name: 'index',
          path: '/index',
          component: Index
        },
        {
          path: '/changeCity',
          name: 'changeCity',
          component: changeCity
        }
      ]
    },
    {
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    }
  ]
})
