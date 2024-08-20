import Vue from 'vue';
import VueRouter from 'vue-router';
import UserLogin from '@/views/UserLogin.vue'; 
import RequestsList from '@/views/RequestsList.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/login', name: 'Login', component: UserLogin }, 
  { path: '/', name: 'RequestsList', component: RequestsList },
  { path: '/request/:id', name: 'EditRequest', component: () => import('@/components/RequestModal.vue') }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;