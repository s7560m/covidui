import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AfterLogin from "../components/AfterLogin/AfterLogin";
import Dashboard from "../components/Dashboard/Dashboard";
import DisplayHospital from "../components/DisplayHospital/DisplayHospital";
import EnterLocation from "../components/EnterLocation/EnterLocation";
import Login from "../components/Login/Login";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/postLogin',
      name: 'AfterLogin',
      component: AfterLogin
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/displayHospital',
      name: 'DisplayHospital',
      component: DisplayHospital
    },
    {
      path: '/enterLocation',
      name: 'EnterLocation',
      component: EnterLocation
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
