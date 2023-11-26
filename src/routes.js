/* eslint-disable */
import Home from "./pages/HomePg.vue"
import SignUp from "./components/SignUp.vue"
import Login from "./components/LoginPg.vue"
import { createRouter,createWebHashHistory } from "vue-router"
import People from "./components/PeoplePg.vue"

const routes=[
    {
       name:"Home",
        component:Home,
        path:'/'
    },
    {
        name:"SignUp",
        component:SignUp,
        path:'/signup'
    },
    {
        name:"Login",
         component:Login,
         path:'/login'
     },
     {
        name:"People",
         component:People,
         path:'/data'
     },

]
const router=createRouter({
    history:createWebHashHistory(),
    routes
})
export default router