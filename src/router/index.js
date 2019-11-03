import Vue from "vue";
import Router from "vue-router";
import {
  Toast
} from 'vant';

// 首页
const Home = () => import('../views/Home.vue').catch(() => {
  Toast("loading...")
})
const about = () => import('../views/About.vue').catch(() => {
  Toast("loading...")
})

Vue.use(Router);

export default new Router({
  routes: [{
    path: "/",
    name: "home",
    component: Home,
    // redirect: 'offer',
    meta: {
      title: "模板",
    },
    // children: [{
    //   path: "/offer",
    //   name: "offer",
    //   component: Offer,
    //   meta: {
    //     title: "模板",
    //     keepAlive: true
    //   }
    // }]
  },
  {
    path: "/about",
    name: "about",
    component: about,
    meta: {
      title: "关于",
      keepAlive: true
    }

  }


  ]
});