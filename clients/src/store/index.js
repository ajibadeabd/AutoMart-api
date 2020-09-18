import Vuex from 'vuex'
import Vue from 'vue'
import router from '../router'
import axios from 'axios'
import Api from '../../config/Api'
import jwt from 'jsonwebtoken'

Vue.use(Vuex)
export default new Vuex.Store({
    
    state: {
      token:localStorage.getItem('token') || '',
        user: {},    
        status:'',
        success:null,
        error:null,
        admin:''
    },
    getters: {
        isLoggedIn: state=>!!state.token ,
          authState: state =>state.status,
          user: state =>state.user,
        //   admin: state =>state.admin,
          error: state=>state.error,
          success: state=>state.success,
           isAdmin: (state)=> state.user.userType==="Admin",
           isUser: (state)=> state.user.userType==="user"
            //    0
            //    if(state.user.userType==){},
            
       },
    actions: {
        async signIn({commit},user) {
            // commit('auth_request');
           try{
            let res= await Api().post('/signIn',user)
            if(res.data.success){
                const token = res.data.data.token;
                const refreshToken = res.data.data.refreshToken;
                const msg = res.data.data.message;
                const user = res.data.data.user;
                localStorage.setItem('token',token);
                localStorage.setItem('refreshToken',refreshToken);
                commit("auth_success",token)
                commit("profile",user)
                axios.defaults.headers.common["Authorization"] = token;
                    }
                    return res;
           }catch(err){
                commit('auth_error',err)
           }
        },
        async signUp({commit},user) {
            commit('register_request');
            try{
                let res= await Api().post('/signUp',user)
       if (res.data.success) {
           commit('register_success',res)

           console.log(res.data.message)
            
       }
       return res;
            }catch(err){
           commit('register_error',err)

            }
            
        },
        async signOut({commit}){
            await localStorage.removeItem('token')
                  localStorage.removeItem('rToken')
            commit('signOut')
            delete   axios.defaults.headers.common['Authorization']
            router.push('/login')
        return
        }
    },
    mutations:{
        order_success(state,item){
            state.success = ''
        },
        profile(state,data){
            state.user = data
        },
        cart_success(state,item){
            state.success = ` ${item} has been added to cart`
        },
        register_request(state){
            state.status = 'loading'
        },
        register_success(state,res){
            state.status = 'success'
            state.success = res.data.message
            state.error=null
        },
        auth_request(state){
            state.status = 'loading'
            state.error=null
            state.success=null

        },
        auth_success(state,token){
            // state.user = 'userData'
            // state.user = user
            state.status = 'success'
            state.token = token
            state.success='you are now logged in'
            state.error=null
        },
        auth_error(state,err){
            state.error=err.response.data.message
            state.success=null


        },
        register_error(state,err){
            state.error= err.response.data.message
        },
        request_success(state,msg){
            state.success= msg
        },
        
        signOut(state){

            state.success=''
            state.error=null
            state.status=""
            state.token=""
            state.user=""
        }
    },
   
    
    

});