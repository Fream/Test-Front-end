import VueRouter from 'vue-router';
import Home from './components/Home.vue';
import VacuumVessel from './components/VacuumVessel';
import DosageMeter from './components/DosageMeter';
import PurchaseReturns from './components/PurchaseReturns';
import Payment from './components/Payment';
import NotFound from './components/NotFound';

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/vacuum-vessel',
    component: VacuumVessel
  },
  {
    path: '/dosage-meter',
    component: DosageMeter
  },
  {
    path: '/purchase-returns',
    component: PurchaseReturns
  },
  {
    path: '/payment',
    component: Payment
  },
  {
    path: '/*',
    component: NotFound
  }
]

export default new VueRouter({
  mode: 'history',
  routes
});