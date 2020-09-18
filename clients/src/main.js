// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import materializeCss from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'
// import { resetToken } from '../../controller/usersController'
Vue.config.productionTip = false
Vue.use(materializeCss)

//setting up default vue's http modules for api calls
Vue.prototype.$http = axios
// load token from local storage
const token = localStorage.getItem("token")
if(token && token.startsWith("Bearer")){
  
  Vue.prototype.$http.defaults.headers.common['Authorization'] = localStorage.getItem("token")


}else{
  localStorage.removeItem('token')
  localStorage.removeItem('rToken')
              store.commit('signOut')
              delete   axios.defaults.headers.common['Authorization']
}
/* eslint-disable no-new */

setInterval(()=>{
      if(localStorage.getItem('rToken') &&  localStorage.getItem('rToken').startsWith('Bearer ')
      ){
        let rT = localStorage.getItem('rToken').split(" ")[1]
        // console.log(localStorage.getItem('token').split(" ")[1])
        jwt.verify(localStorage.getItem('token').split(" ")[1],'secure',(err,decoded)=>{
          if(err){
            // console.log('error don dea sha')
            axios.post(`http://localhost:3000/resetClientToken/${rT}`)
            .then(res=>{
              if(res.data.success){
                const token = res.data.token;
                const msg = res.data.msg;
                const user = res.data.user;
                localStorage.setItem('token',token);
                Vue.prototype.$http.defaults.headers.common['Authorization'] = token
               
             store.commit("auth_success",token,user)
                    }
            })
            .catch(err=>{
              console.log(err)
            })

          }
          else{
            if(decoded){
              // console.log(decoded)
              // console.log('Authorized user')
              
            }
          }
         
        })
          
//           if(decoded){
//            return console.log('Authorized user')
//           }else{
//             if(err.message==='jwt expired'){
//               console.log(err.message)
//               // get refreshed token from cookies sto
        //       axios.post(`http://localhost:3000/resetClientToken/${T}`)
        // .then(res=>{
        //   if(res.data.success){
        //     const token = JSON.stringify(res.data.token);
        //     const msg = res.data.msg;
        //     const user = res.data.user;
        //     localStorage.setItem('token',token);
        //     Vue.prototype.$http.defaults.headers.common['Authorization'] = token
           
        //  store.commit("auth_success",token,user)
        //         }
        // })
        // .catch(err=>{
        //   console.log(err)
        // })
//             } else{
//               console.log(err.message)
//             localStorage.removeItem('token')
//               store.commit('signOut')
//               delete   axios.defaults.headers.common['Authorization']
//             }
//           }
//             })

//       }else{
//         localStorage.removeItem('token')
//         store.commit('signOut')
//         delete   axios.defaults.headers.common['Authorization'] 
      }
    },1000)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
