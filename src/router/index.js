import { createRouter, createWebHistory } from 'vue-router'
import Team from '../views/fpl/Team.vue'
import League from '../views/fpl/League.vue'
import NotFound from '../views/404.vue'

const routes = [
  {
    path: '/:id?',
    name: 'Team',
    component: Team,
    props: true
  },
  {
    path: '/league/:id?',
    name: 'League',
    component: League,
    props: true
  },
  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
