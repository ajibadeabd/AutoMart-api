<template>
<div>
     
 <ul class="grey lighten-3 collapsible ">
       

         <li v-if="!isLoggedIn"><a href="/logOut" @click.prevent="logOut">
         <i class="  blue-text fa fa-sign-out"></i> Logout</a
         ></li>
         <div class="divider"></div>
          <li >
          <router-link class="  blue-text" to='/about'>
           <i class="fa center fa-user-plus" aria-hidden="true"></i> Chect report
          </router-link>
        </li>
          <li>
          <div class="center blue-text collapsible-header">
            make request
          </div>
          <div class="collapsible-body">
            <router-link to='/maintainance'>Repair</router-link>
            </div>
          <div class="collapsible-body">
            <router-link to='/maintainance'>Maintain</router-link>
            
            </div>
        </li>
        </ul>
        

      
   
   
</div>


</template>
<script>
// import axios from 'axios'
import {mapActions} from 'vuex'
import Api from '../../config/Api'
import init from '../com-init/init'
// import router from "../../router"
export default {
    mixins:[init],
    data(){
        return{
            userName:'',
            email:'',
            confirm_password:'',
            password:''

        }
    },
    methods:{
        ...mapActions(['signUp']),
        SignUp(){
            let userInfo={
                userName:this.userName,
                confirm_password:this.confirm_password,
                password:this.password,
                email:this.email,
            }
this.signUp(userInfo)
.then(res=>{
    if (res.data.success) {
        this.$router.push('/login')
    }
}).catch(error=>{
    console.log(error)
})

    
            

        }

    }
}
</script>
<style scoped>
.collapsible,.main{
    min-height: 100vh;
}

.icon{
    margin-top:25px
}
.collapsible-header{
    height: 40px;
}
 .collapsible-body{
    height: 40px;
    margin: 0px;
    padding: 0px 3px 3px 30px;

 }
 .card{
     padding:0px  5px;
 }
 .pas{
     background-color: red;
     height: 220px;
     width: 50px;
     margin: 0px 0px 0px 0px ;
 }
 button{
     border-radius: 30px;
 }
 
 .spa{
     height: 250px;

 }
 li{
   min-height:50px;
 }
 i{
margin-left: 27%;
font-size: 30px;
 }
 ul,nav,div{
   margin-top: 0px !important;
   padding-top: 0px !important;
 }
</style>