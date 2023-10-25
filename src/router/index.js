import { createRouter, createWebHistory } from 'vue-router'
import WeatherView from '../views/WeatherView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Weather',
      component: WeatherView ,
      meta:{
        title: 'Weather' ,
      }
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView ,
      meta:{
        title: 'projects' ,
      }

    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView ,
      meta:{
        title: 'contact me' ,
      }
    }
  ]
}) ;

router.beforeEach((to , from , next)  => {
  document.title = `${to.meta.title}`;
  next();
});

export default router
