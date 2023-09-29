import { createRouter, createWebHistory } from 'vue-router'
import LineOACheck from './components/LineOACheck.vue'
import TheWelcome from './components/TheWelcome.vue'
import HelloWorld from './components/HelloWorld.vue'
import WaitBeforeProfile from './components/WaitBeforeProfile.vue'
import Profile from './components/Profile.vue'
import Home from './components/Home.vue'
import History from './components/History.vue'
import Reward from './components/Reward.vue'
import RewardRecord from './components/RewardRecord.vue'

export default new createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'LineOACheck',
      component: LineOACheck
    },
    {
      path: '/consent',
      name: 'consent',
      component: TheWelcome
    },
    {
      path: '/register',
      name: 'register',
      component: HelloWorld
    },
    {
      path:'/wait',
      name:'wait',
      component:WaitBeforeProfile
    },
    {
      path:'/profile',
      name:'profile',
      component:Profile
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/history',
      name:'history',
      component:History
    },
    {
      path:'/reward',
      name:'reward',
      component:Reward
    },
    {
      path:'/rewardRecord',
      name:'rewardRecord',
      component:RewardRecord
    }
  ]
})