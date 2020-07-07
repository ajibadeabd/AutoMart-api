<template>
 <div>

     <div class='navbar-fixed'>
<nav class="grey lighten-3">
  <div class="container">
    <div class="nav-wrapper">
      
      <!-- SIDE MENU -->
      <a href="#" data-target="mobile-demo" class="blue-text sidenav-trigger"><i class="material-icons">menu</i></a>
      
    <div href="#!"  class=" left hide-on-med-and-down  circle brand-logo">
      <img src="https://static.jiji.ng/static/img/main-page/girls.png" class=" logo circle responsive-img" alt="">
     
    </div>
    <ul class="right  hide-on-med-and-down">
        
         
        <li v-if="!isLoggedIn">
          <router-link class="blue-text" to='/login'>
           <i class="blue-text   fa fa-sign-in"></i> login
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link  class="blue-text" to='/register'>
           <i class="fa blue-text fa-user-plus" aria-hidden="true"></i> register
          </router-link>
        </li>
      
        <li v-if="isLoggedIn" ><a href="/logOut" class="blue-text" @click.prevent="logOut">
         <i class="blue-text fa fa-sign-out"></i> Logout</a
         ></li>
          <li >
          <router-link class="blue-text" to='/'>
           <i class="blue-text fa fa-home"></i> home
          </router-link>
        </li>
       
          <li  v-if="isUser">
          <router-link  class="  blue-text" to='/dashboard'>
            Chect request status
          </router-link>
        </li>
        <li >
          <router-link v-if="isUser" class="  blue-text" to='/maintainance'>
            make a request
          </router-link>
        </li>
        <li v-if="!isLoggedIn">
          <router-link class="blue-text" to='/about'>
               about
          </router-link>
        </li>
    </ul>
    </div>
  </div>
</nav>
</div>
 <ul class="sidenav collapsible" id="mobile-demo">
        <li><div class="user-view">
      <div class=" responsive-img background">
        <img src="">
      </div>
      <a href="#"><img class="circle" src=""></a>
   
      
      <a   v-if="isLoggedIn" href="#"><span  class="blue-text email">{{user.userName}}</span></a>
      <a  v-if="isLoggedIn" href="#"><span  class="blue-text email">{{user.email}}</span></a>
    </div></li>
        <!-- <li class="divider"></li> -->

         <li v-if="isLoggedIn"><a class="blue-text" href="/logOut" @click.prevent="logOut">
         <i class="blue-text fa fa-sign-out"></i> Logout</a
         ></li>
         
     <li  >
          <router-link class="blue-text" to='/'>
           <i class="blue-text fa fa-home"></i> home
          </router-link>
        </li>
        <li>
          <router-link v-if="!isLoggedIn" class="blue-text" to='/login'>
           <i class="fa blue-text fa-sign-in"></i> login
          </router-link>
        </li>
       
        <li >
          <router-link  v-if="!isLoggedIn" class="blue-text" to='/register'>
           <i class="fa fa-user-plus blue-text " aria-hidden="true"></i> register
          </router-link>
        </li>

        <li v-if="!isLoggedIn" >
          <router-link class="blue-text" to='/about'>
           <i class="fa fa-user-plus blue-text" aria-hidden="true"></i> about
          </router-link>
        </li>
          <li  >
          <router-link  class="  blue-text" to='/dashboard'>
           <i class="fa center blue-text fa-user-plus" aria-hidden="true"></i> Chect request status
          </router-link>
        </li>
        <li  v-if="isUser" >
     <div class="divider"></div>
          <router-link  class="  blue-text" to='/maintainance'>
           <i class="material-icons center blue-text " 
           aria-hidden="true">settings</i> make a request
          </router-link>
        </li>
       <li v-if="isAdmin" >
          <div class="divider"></div>
          <router-link     class="  blue-text"
           to='/Admin-View-Request'>
            View pending Requests
          </router-link>
        </li>
         <div class="divider"></div>
          <li >
          <router-link v-if="isAdmin" class="  blue-text"
           to='/Admin-Approved-Request'>
            View Approved Requests
          </router-link>
        </li>
          <li >
          <router-link v-if="isAdmin" class="  blue-text"
           to='/Admin-Rejected-Request'>
            View Rejected Requests 
          </router-link>
        </li>
          <li >
          <router-link v-if="isAdmin" class="  blue-text"
           to='/Admin-All-Request'>
            View All Requests
          </router-link>
        </li>
      <li >
          <router-link v-if="isAdmin" class="  blue-text" to='/Admin-Resolved-Request'>
            View Resolved Requests
          </router-link>
        </li>
          <li >
          <router-link v-if="isAdmin" class="  blue-text" to='/admin-DashBoard'>
            DashBoard
          </router-link>
        </li>
         

      </ul>
   
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

import m from 'materialize-css'
import Api from '../../config/Api'


export default {
 
 data(){
   return{

   }
 },
 created(){
if(this.isLoggedIn){
    // this.fetchProfile()

}else{
  console.log('go and reg')
}
   
 },
 
 computed:{
   ...mapGetters(["isLoggedIn","isUser",'user',"isAdmin"]),

  //  user(){
  //           return this.$store.getters.user
  //  }
    
 },
methods:{
   
 
   ...mapActions(["signOut"]),
logOut(){
this.signOut()
}
},
 mounted(){
    


  }
 
}
</script>
<style scoped>
nav{
  position: relative;
}
img{
    height: 200px;
    width:300px;
}
.logo{
  height: 63px;
    width:68px;
}
.shift,.ma{
margin-left: 6%;
}
.shifts{
margin-left: 30%;

}
</style>