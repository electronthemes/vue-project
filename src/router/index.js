import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue'; 
import Services from '../views/services/Services.vue';
import ContactUs from '../views/ContactUs.vue';
import ServiceDetails from '../views/services/ServiceDetails.vue';
import Errors from '../views/Errors.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/',
      name: 'services',
      component: Services
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactUs
    },
    //Dynamic single service Route
    {
      path: '/service-details/:id',
      name: 'service-details',
      component:ServiceDetails,
      props:true
    },
    // redirect
    {
      path:'/all-services',
      redirect:'/services' // redirect to services
    },

    //error page
    {
      path:'/:catchAll(.*)',
      name:'error',
      component:Errors
    }
  ]
})

export default router
