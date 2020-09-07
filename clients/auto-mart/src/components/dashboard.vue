<template>
    <div class="row">
 <div class="col xl3 l3 m3 hide-on-small-only">

<SD />
 </div>
<div class="col  card  xl9 l9 m9 s12">
<div class="">

    <div class="col m12 s12 l12  xl12">
        <h3 class="center">
        MAINTAINANE REPORT
        </h3>

    </div>

   
     <div v-if="requests"  class="row">
                <div  v-for="(request,index) in requests"
                 :key='index' class="col s12 m6 l6 xl6">
     <div  class="row grey bt request">
        <div class="col m10 l10  offset-s1    offset-m1    offset-xl1    offset-l1 message white s10 xl10">  {{request.message}} 
            
         

        </div>
    <div  class="col m6 l6 s6 xl6">
      <strong>status:</strong>   {{request.status}} </div>
      <!-- {{request._id}} -->

          <div v-if="request.status!=='Resolved'"
           class="col right  m6 l6 s6 xl6">
          <router-link  class="right blue btn-small" :to="{ name: 'editrequest',
          params: { id: request._id }}"> 

                <i class="material-icons edit right"> edit</i>
              </router-link>
     </div>




         
  
    
</div>
                </div>
            </div>
            <div v-else> <h4 class="center">
                No available request
                </h4> </div>
    
     
   

</div>

</div>
    </div>
</template>

<script>
import SD from "./admin-side-nave"
import Api from "../../config/Api"
export default {
    data(){
        return{
            requests:''
        }
    },
    components:{SD},
    created(){
      
    }
}
</script>
<style scoped>
h3,div,h4{
    padding-top:0px !important;
    margin-top:0px !important;
}
.card{
    width: 100%;
}
.bt{
    margin: 8px;
}
 .message{
   
     height:110px;
      margin-top: 15px !important;

     } 
     
</style>