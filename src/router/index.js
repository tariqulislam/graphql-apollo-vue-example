import Vue from 'vue'
import Router from 'vue-router'
import article from '@/components/article/index'
import author from '@/components/author/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/article',
      name: 'Article',
      component: article
    },
    {
      path: '/author',
      name: 'Author',
      component: author
    }
  ]
})
