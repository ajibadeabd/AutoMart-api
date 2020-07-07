<template>
    <div>


<div class="row">

<div class="col hide-on-small-only m3 l3 xl3">
<SD />
</div>
<div class="col s12 m9 l9 xl9">
<div class="row">
    <div class="col s12 m12 l12 xl12">
        <div class="card">
            <h3 class="center">      Approved Requests</h3> <br>
        <div v-if="requests"  class="row">
                <div  v-for="(request,index) in requests"
                 :key='index' class="col s12 m12 l6 xl6">
                         <div  class=" row">
     <div  class="row blue bt request">
        <div class="col m10 l10 message  offset-s1    offset-m1    offset-xl1    offset-l1 s10 white xl10">  {{request.message}} </div>
    <div  class="col m6 l4 s6 xl3">
      <strong>status:</strong>   {{request.status}} </div>
    <div class="col m6 l4 s6 xl3"> <strong>user:</strong>
    {{request.user_id}}
    
     </div>
   
      <div class="col m12 l12 s12 xl12"> 
        <div class="row">
            <div class="col l6 m6 s6 xl6">  
                 
                <span class=" btn bt red" @click="resolved(request._id)">Resolved</span>
                 </div> 
            
                
        </div>
         </div>
     
  
    
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

        create(){
                 Api().get('/viewApprovedRequestsByAdmin')
        .then(res=>{
         this.requests=res.data.requests
        })
        .catch(err=>{
            console.log(err)
        })
        },
            resolved(user){
        Api().put(`/ResolveRequestsByAdmin/${user}`)
        .then(res=>{if(res.data.success) {this.requests=res.data.requests,
        this.$store.state.success=res.data.msg

        this.create()}})
    .catch(err=>{console.log(err)})
                
            }
    },
    components:{
        SD
    },
    created(){
       this.create()
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
    min-height: 13vh !important;
}
.bt{
    margin: 8px !important;
    border-radius: 10px;
}
.message{
    
        height:110px !important;
     background-color: white;
     margin-top: 15px !important;

     }
</style>