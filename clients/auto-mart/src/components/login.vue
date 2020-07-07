<template>
<div class="row">



   <div class="col s10 m6 l4  offset-l4 offset-s1 offset-m3">
        <form @submit.prevent="SignIn"> 
                     <div class="card">
            <div class="card-action  white-text">
                <h3 class="center light-blue-text  ">
                    <i class="fa fa-sign-in"></i> Login</h3>
            </div>
            <div class="card-content">
               
                <div class="form-field">
                    <label for="email">Email</label>
                     <input type="email"
                     placeholder="email"
                     required=required
                      v-model="email" id="email">

                </div> <br>
                <div class="form-field">
                    <label for="password">Password</label>
                     <input type="password"
                     placeholder="password"
                     required=required
                      v-model="password" id="password">

                </div> <br>
                
                <div class="form-field">
                  <button class="btn-large light-blue waves-effects waves-dark"
                  style="width:100%;" 
                  type="submit">Login</button>

                </div> <br>
                            <div>
                                 Don't have  aan Account <router-link to=/register>
            sign Up
        </router-link>
                            </div>
                        
            </div>
        </div>
      
        </form>
       
    </div>
    
</div>


</template>
<script>
import initMaterializeComp from '../com-init/init'
import axios from 'axios'
import {mapActions} from 'vuex'
import Api from '../../config/Api'
export default {
  mixins: [initMaterializeComp],

    data(){
        return{
            email:'',
            password:'',
            

        }
    },
    methods:{
        ...mapActions(['signIn']),
        SignIn(){
            let userInfo={
                // userName:this.userName,
                password:this.password,
                email:this.email,
            }
this.signIn(userInfo)
.then(res=>{
    if (res.data.success) {
        if(res.data.user.userType==='Admin' ) { 
        this.$router.push('/admin-DashBoard')
        }else{
        this.$router.push('/dashboard')

        }
    }
})
.catch(err=>{
  console.log(err)
  this.$store.commit('auth_error',err)
})

       
        }
        },
mounted(){
  
},
created(){
// console.log(mixins)

}
}
</script>

<style scoped>
button{
     border-radius: 30px;
 }
</style>