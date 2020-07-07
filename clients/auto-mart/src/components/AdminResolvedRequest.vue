<template>
    <div>


<div class="row">

<div class="col hide-on-small-only m3 l3 xl3">
<SD />
</div>
<div class="col card s12 m9 l9 xl9">
<div class="row">
    <div class="col s12 m12 l12 xl12">
        <div class="">
            <h3 class="center blue-text">Resolved Requests</h3> <br>
             <div v-if="requests"  class="row">
                <div  v-for="(request,index) in requests"
                 :key='index' class="col s12 m12 l6 xl4">
     <div  class="row  blue bt request">
        <div class="col m10 l10 message  offset-s1    offset-m1    offset-xl1    offset-l1 s10 white xl10">  {{request.message}} </div>
    <div  class="col m4 l6 s6 xl6">
      <strong>status:</strong>   {{request.status}} </div>
    <div class="col m4 l6 s6 xl6"> <strong>user:</strong>
    {{request.user_id}}
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
</div>


</div>


    </div>
</template>
<script>
import SD from  './admin-side-nave'
import Api from "../../config/Api"
export default {
    data(){
        return{
            requests:''
        }
    },
    methods:{

    },
    components:{
        SD
    },
    created(){
        Api().get('/viewResolvedRequestsByAdmin')
        .then(res=>{
         this.requests=res.data.requests
        })
        .catch(err=>{

        })
    },
}
</script>

<style scoped>
li{
    height: 8vh;
}

.row,div,ul,h3,h1,h2,h4{
    margin: 0px;
    padding: 0px;
}
.card{
    min-height: 100vh !important;
}
.request{
    min-height: 14vh !important;
    margin: 9px !important;
    padding: 9px !important;
    border-radius: 8px;
}
.bt{
    margin-top: 8px;
}
.message{
     /* width:90% !important;
     overflow: auto;
     background-color: white; */
     margin-top: 15px  !important;
     height:110px !important;

     }
</style>