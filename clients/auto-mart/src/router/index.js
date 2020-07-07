import Api from '../../config/Api'
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import store from '../store'
import login from '@/components/login'
import register from '@/components/register'
import contact from '@/components/contactPage'
import dashboard from '@/components/dashboard'
import maintainance from  '@/components/maintainance/maintain.vue'
import adminDashBoard from  '@/components/adminDashBoard.vue'
import AdminViewRequest from  '@/components/AdminViewRequest.vue'
import AdminApprovedRequest from  '@/components/AdminApprovedRequest.vue'
import AdminRejectedRequest from  '@/components/AdminRejectedRequest.vue'
import AdminAllRequest from  '@/components/AdminAllRequest.vue'
import AdminResolvedRequest from '@/components/AdminResolvedRequest.vue'
import about from '@/components/about.vue'
import editrequest from '@/components/editrequest.vue'
import postAds from '@/components/postAds.vue'
import profileMessage from '@/components/profile-message.vue'
import seller from '@/components/seller.vue'




Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/postAds',
      name: 'postAds',
      component: postAds
    },
    {
      path: '/profile-message',
      name: 'profileMessage',
      component: profileMessage
    }, 
    {
      path: '/seller-page',
      name: 'seller',
      component: seller
    },

    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta:{
        requiresGuest:true
    }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta:{
        requiresGuest:true
    }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta:{
        requiresGuest:true
    }
      
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta:{
        requiresGuest:true
    }
    },
   
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      meta:{
        requiresAuth:true
    }
    },
    {
      path: '/maintainance',
      name: 'maintainance',
      component: maintainance
    },
    {
      path: '/admin-DashBoard',
      name: 'adminDashBoard',
      component: adminDashBoard,
      meta:{
        requiresAdmin:true
    }
    },
    {
      path: '/Admin-View-Request',
      name: 'AdminViewRequest',
      component: AdminViewRequest,
      meta:{
        requiresAdmin:true
    }
    },
    {
      path: '/Admin-Approved-Request',
      name: 'AdminApprovedRequest',
      component: AdminApprovedRequest,
      meta:{
        requiresAdmin:true
    }
    },
    {
      path: '/Admin-Rejected-Request',
      name: 'AdminRejectedRequest',
      component: AdminRejectedRequest,
      meta:{
        requiresAdmin:true
    }
    },
    {
      path: '/Admin-All-Request',
      name: 'AdminAllRequest',
      component: AdminAllRequest,
      meta:{
        requiresAdmin:true
    }
    },
    {
      path: '/Admin-Resolved-Request',
      name: 'AdminResolvedRequest',
      component: AdminResolvedRequest,
      meta:{
        requiresAdmin:true
    }
    },
    {
      path: '/Edit-Request/:id',
      name: 'editrequest',
      component:editrequest,
      props:true

    },
    
    
  ],
  mode:'history'
})
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
if(!store.getters.isLoggedIn){
    next("/login")

}else{
    next();
}
}else if(to.matched.some(record=>record.meta.requiresGuest)){
if(store.getters.isLoggedIn){
    next("/dashboard")

}else{
    next();
}
}else if(to.matched.some(record=>record.meta.requiresAdmin)){
  if(store.getters.isLoggedIn){
    Api().get('/userProfile')
         .then(res=>{
           if (res.data.userType) {
         store.commit('profile',res.data)
        if(store.getters.isAdmin ){
          next()
        }else{
          next('/dashboard')
        }
        
    
    
           }
         }).catch(err=>{
           console.log(err)
         })
  
  }else{
    next("/login")

  }
  }else{
next()
}

});


export default router;


