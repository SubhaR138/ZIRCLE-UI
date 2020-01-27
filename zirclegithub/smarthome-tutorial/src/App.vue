<template>

   
<!--all the zircle ui components will bve rendered inside the z-canvas-->
<!--z-canvas has on prop called view where we put all our vies inside-->
  <z-canvas :views='$options.components'></z-canvas>
  
</template>
<script>
// TO SET UP VUE-ROUTER UNCOMMENT THE FOLLOWING LINES
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router()

export default {
  components: {
    tv: () => import('./views/tv'),
    DiningHall: () => import('./views/living'),
    search: () => import('./views/search'),
    device: () => import('./views/device'),
    home: () => import('./views/home'),
    settings: () => import('./views/settings'),
    rooms: () => import('./views/rooms'),
    devices: () => import('./views/devices'),
    status: () => import('./views/status'),
    scenes: () => import('./views/scenes'),
    location: () => import('./views/family'),
    logs: () => import('./views/logs'),
    aboutus: () => import('./views/aboutus'),
    achievements: () => import('./views/achievements'),
    services: ()=> import('./views/services')
  },
  mounted () {
    this.$zircle.config({
      mode: 'full',
      style: {
        theme: 'black',
        mode: 'dark'
      },
      debug: true
    })
    //  here we set the zircleview home because this is the initial view
    this.$zircle.setView('home')
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');
@import url('https://use.fontawesome.com/releases/v5.1.0/css/all.css');
</style>
