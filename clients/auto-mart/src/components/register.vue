<template>
<div class="row">
   

   <div class="col s10 m6 l4  offset-l4 offset-s1 offset-m3">
        <form @submit.prevent="SignUp"> 
                     <div class="card">
            <div class="card-action  white-text">
                <h3 class="center light-blue-text  ">
                    <i class="fa fa-user-plus"></i> Register</h3>
            </div>
            <div class="card-content">
               
                <div class="form-field">
                    <label for="userName">userName</label>
                     <input type="text"
                     required
                     placeholder="userName"
                      v-model="userName" id="userName">

                </div> <br>
                <div class="form-field">
                    <label for="email">Email</label>
                     <input type="email"
                     required
                     placeholder="email"
                      v-model="email" id="email">

                </div> <br>
                  <div class="form-field">
                    <label for="password">Password</label>
                     <input type="password"
                     required

                     placeholder="password"
                      v-model="password" id="password">

                </div> <br>
                <div class="form-field">
                    <label for="confirm_password">confirm password</label>
                     <input type="password"
                     required

                     placeholder="confirm_password"
                      v-model="confirm_password" id="confirm_password">

                </div> <br>
                
                <div class="form-field">
                  <button class="btn-large light-blue waves-effects waves-dark"
                  style="width:100%;" 
                  type="submit">Login</button>

                </div> <br>
                            <div>
                                  have an Account <router-link to=/login>
            sign In
        </router-link>
                            </div> 


                        
            </div>
        </div>
      
        </form>
       
    </div>
 
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
    components:{
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
        this.$store.commit('register_success',res)
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
</style>