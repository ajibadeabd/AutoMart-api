<template>
    
    <div>
        
<div class="card">
<ul class="center">

   <li  v-if="isUser" >
     <div class="divider"></div>
          <router-link  class="  blue-text" to='/maintainance'>
           make a request
          </router-link>
        </li>
        <li  v-if="isUser" >
          <div class="divider"></div>
          <router-link  class="  blue-text" to='/dashboard'>
           Chect request status
          </router-link>
        </li>
        <li v-if="isAdmin" >
          <div class="divider"></div>
          <router-link     class="  blue-text"
           to='/Admin-View-Request'>
            View pending Requests
          </router-link>
        </li>
        
         
          <li v-if="isAdmin"  >
            <div class="divider"></div>
          <router-link  class="  blue-text"
           to='/Admin-Approved-Request'>
            View Approved Requests
          </router-link>
        </li>
         <!-- <div class="divider"></div> -->
          <li v-if="isAdmin" >
            <div class="divider"></div>
          <router-link  class="  blue-text"
           to='/Admin-Rejected-Request'>
            View Rejected Requests 
          </router-link>
        </li>
        <!-- <div class="divider"></div> -->
          <li v-if="isAdmin" >
            <div class="divider"></div>
          <router-link  class="  blue-text"
           to='/Admin-All-Request'>
            View All Requests
          </router-link>
        </li>
         <!-- <div class="divider"></div> -->
      <li v-if="isAdmin"  >
        <div class="divider"></div>
          <router-link  class="  blue-text" to='/Admin-Resolved-Request'>
            View Resolved Requests
          </router-link>
        </li>
         <!-- <div class="divider"></div> -->
          <li v-if="isAdmin" >
            <div class="divider"></div>
          <router-link  class="  blue-text" to='/admin-DashBoard'>
            DashBoard
          </router-link>
         

        </li>
        <div class="divider"></div>
    </ul>

</div>
    </div>
</template>


<script>
  import {mapGetters,mapActions} from 'vuex'

export default {
  data(){
    return{

    }
  },
  methods:{

  },
  computed:{
   ...mapGetters(["isLoggedIn","isUser",'user',"isAdmin"]),

  }
  ,created(){
  }
}
</script>


<style scoped>
li{
    height: 5.9vh;
    margin-top: vh;
    font-size: 2.1vh;
}

div,ul{
    margin: 0px;
    padding: 0px;
}
.card{
    min-height: 100vh;
}

</style>