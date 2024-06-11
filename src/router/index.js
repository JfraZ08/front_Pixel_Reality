import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnterpriseView from '../views/EnterpriseView.vue'
import PhotographieView from '../views/PhotographieView.vue'
import ImagerieIaView from '../views/ImagerieIaView.vue'
import PhorogrammetrieView from '../views/PhotogrammetrieView.vue'
import QRCodeView from '../views/QRCodeView.vue'
import ContactView from '../views/ContactView.vue'
import Drones from '@/components/Drones.vue'
import AdminDrone from '@/admin/views/AdminDrone.vue'
import UserConnexionView from '@/admin/views/UserConnexionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entreprise',
      name: 'entreprise',
      component: EnterpriseView
    },
    {
      path: '/photographie',
      name: 'photographie',
      component: PhotographieView
    },
    {
      path: '/imagerieia',
      name: 'imagerieia',
      component: ImagerieIaView
    },
    {
      path: '/photogrammetrie',
      name: 'photogrammetrie',
      component: PhorogrammetrieView
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: QRCodeView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/drone',
      name: 'drone',
      component: Drones
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: UserConnexionView
    },
    {
      path: '/admin/drone',
      name: 'admin_drone',
      component: AdminDrone
    }
  ]
})

export default router