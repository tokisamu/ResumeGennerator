import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Create from './views/Create.vue'
import BasicInfo from './components/formcontent/BasicInfo.vue'
import ExpectedJob from './components/formcontent/ExpectedJob.vue'
import Education from './components/formcontent/Education.vue'
import Prize from './components/formcontent/Prize.vue'
import Academic from './components/formcontent/Academic.vue'
import School from './components/formcontent/School.vue'
import SelfComment from './components/formcontent/SelfComment.vue'
import Skill from './components/formcontent/Skill.vue'
import Work from './components/formcontent/Work.vue'
import WorksDisplay from './components/formcontent/WorksDisplay.vue'
import PlainResumeDemo from './components/formcontent/PlainResumeDemo.vue'
import ColorfulResumeDemo from './components/formcontent/ColorfulResumeDemo.vue'
import preview from './components/formcontent/preview.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/create',
      //name: 'create',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Create,
      children:[
        {path:'expectedjob',component: ExpectedJob},
        {path:'education',component: Education},
        {path:'basicinfo',component: BasicInfo},
        {path:'academic',component: Academic},
        {path:'prize',component: Prize},
        {path:'school',component: School},
        {path:'selfcomment',component: SelfComment},
        {path:'skill',component: Skill},
        {path:'work',component: Work},
        {path:'worksdisplay',component: WorksDisplay},
      ]
    },
    {
      path: '/PlainResumeDemo',
      name: 'PlainResumeDemo',
      component: PlainResumeDemo
    },
    {
      path: '/preview',
      name: 'preview',
      component: preview
    },
    {
      path: '/ColorfulResumeDemo',
      name: 'ColorfulResumeDemo',
      component: ColorfulResumeDemo
    }
  ]
})
