import Vue from 'vue'
import Router from 'vue-router'
import Goods from 'components/goods/goods'
import Rating from 'components/rating/rating'
import Seller from 'components/seller/seller'

Vue.use(Router)

export default new Router({
  // 切换路径模式，秉承history模式，也就是去掉#
  mode: 'history',
  // 滚动条的滚动行为， 不加这个默认就会记忆原来滚动条的位置
  scrollBehavior: () => ({y: 0}),
  routes: [
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/',
      redirect: '/goods'
    },
    {
      path: '/rating',
      name: 'Rating',
      component: Rating
    },
    {
      path: '/seller',
      name: 'Seller',
      component: Seller
    }
    // 默认路由配置
    // {
    //   path: '**',
    //   name: 'Goods',
    //   component: Goods
    // }
  ]
})
