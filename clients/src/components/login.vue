<template>
<div class="row">



   <div class="col s10 m8 l6 card xl6 offset-l3 offset-s1 offset-m2 offset-xl3">
       <!-- <button><i class="material-icons fa fa-google"></i></button>
        --> <h4 class="green-text">Login</h4>
        <div class="divider"></div>
        
        <form @submit.prevent="SignIn"> 
                     <div class="s10 offset-s1  offset-l3 offset-xl3 offset-m2 col m8 xl6 l6 ">
            <div class="card-action  white-text">
                <!-- <h3 class="center light-blue-text  ">
                    <i class="fa fa-sign-in"></i> Login</h3> -->
            </div>
            <div class="card-content">
                <div class="orange  other center white-text"> google</div>
                <div class="facebook   other center light-blue white-text"> Facebook</div>
               
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
                                  <br>
            <div class='progress'  :class="loading">
      <div class="indeterminate"></div>
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
            loading:'hide'
            

        }
    },
    methods:{
        ...mapActions(['signIn']),
        SignIn(){
            let userInfo={
                password:this.password,
                email:this.email,
            }
            this.loading=''
this.signIn(userInfo)
.then(res=>{
    if (res.data.success) {
        this.$router.push('/dashboard')
    }
}).catch(err=>{
            this.loading='hide'
})

} },
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
 .other{
border-radius: 15px;
margin-top:5px;
height:30px
 }
</style>