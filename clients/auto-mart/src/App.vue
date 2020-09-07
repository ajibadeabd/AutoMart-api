<template>
  <div id="app">
  <NavBar />
  <error />
  <success  />
    <router-view/>
  </div>
</template>

<script>
import m from 'materialize-css'
import NavBar from './components/NavBar'
import error from "./components/msg/error"
import success from "./components/msg/success"
import Api from "../config/Api"
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  data(){
    return{
    mee:0
    }
  },
  components:{
NavBar,
error,
   success
  },
  methods:{
    wee(){

     this.mee++
     this.$store.commit('profile',this.mee)
    },

   fetchProfile(){
     Api().get('/userProfile')
     .then(res=>{
       if (res.data.userType) {
     this.$store.commit('profile',res.data)
       }
     }).catch(err=>{
       console.log(err)
     })
   },
  },
  mounted(){
    m.AutoInit()

  },
  computed:{ 
   ...mapGetters(["isLoggedIn","user"]),

  },
  watch:{
    
    // '$store.state.token'(newVal,oldVal){
    //   if (  this.$store.state.token===localStorage.getItem('token')   ) {
    //     this.fetchProfile()
    //   }else if(this.$store.state.token!==localStorage.getItem('token')){

    //   }
     
    // },
   
  },

  created(){
   if(this.isLoggedIn){
    this.fetchProfile()

}else{
  console.log('go and reg')
}
}

}
</script>

<style>

</style>
