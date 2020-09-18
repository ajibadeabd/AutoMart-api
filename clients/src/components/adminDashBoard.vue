<template>
    <div>


<div class="row">

<div class="col hide-on-small-only m3 l3 xl3">
<SD />
</div>
<div class="col s12 m9 l9 xl9">
<div class="card row">
    <h4 class="center blue-text state">Status of all user requests</h4>
    <div class="col s12 m6 l4 xl4">
       <div class="row grey-p  blue "><br>
           <div class="col center red s3 m3 l3 xl3">{{pendingUser}}</div>
           
           <div class="col center s7 m7 l7 xl7"> PENDING REQUEST</div>
       </div>
    <br>
    <br>
    <br>

    </div>
     <div class="col s12 m6 l4 xl4">
       <div class="row grey-p  blue">
           <br>
           <div class="col center red s3 m3 l3 xl3">{{approvedUser}}</div>
           
           <div class="col center  s7 m7 l7 xl7">APPROVED REQUEST</div>
       </div>
    <br>
    <br>
    <br>

    </div>
     <div class="col s12 m6 l4 xl4">
       <div class="row grey-p  blue"><br>
       <div class="col center red s3 m3 l3 xl3">{{resolvedUser}}</div>
           
           <div class="col center  s7 m7 l7 xl7">RESOLVED REQUEST</div>
          
       </div>
    <br>
    <br>
    <br>

    </div>
     <div class="col s12 m6 l4 xl4">
       <div class="row grey-p  blue"><br>
               <div class="col center red s3 m3 l3 xl3">{{rejectedUser}}</div>
           
           <div class="col center  s7 m7 l7 xl7">REJECTED REQUEST</div>
       </div>
    <br>
    <br>
    <br>

    </div>
    
</div>
</div>


</div>


    </div>
</template>
<script>
import Api from '../../config/Api'
import SD from './admin-side-nave'
export default {
    data(){
        return{
           rejectedUser:'',
           pendingUser:'',
           approvedUser:'',
           resolvedUser:'',
        }
    },
   
    components:{
        SD
    },
    methods:{
pendingUsers(){
    Api().get('/pendingUser')
    .then(res=>{if(res.data.success) {this.pendingUser=res.data.count}})
    .catch(err=>{console.log(err)})
},
rejectedUsers(){
    Api().get('/rejectedUser')
    .then(res=>{if(res.data.success) {this.rejectedUser=res.data.count}})
    .catch(err=>{console.log(err)})
},approvedUsers(){
    Api().get('/approvedUser')
    .then(res=>{if(res.data.success) {this.approvedUser=res.data.count}})
    .catch(err=>{console.log(err)})
}
,resolvedUsers(){
    Api().get('/resolvedUser')
    .then(res=>{if(res.data.success) {this.resolvedUser=res.data.count}})
    .catch(err=>{console.log(err)})
}
    },
    created(){
        this.pendingUsers(),
        this.resolvedUsers(),
        this.rejectedUsers(),
        this.approvedUsers()

    },
}
</script>

<style scoped>
li{
    height: 8vh !important;
}

div,ul,h1,h2,h3,h4,h5,h6{
    margin: 0px;
    padding: 0px;
}
.card{
    min-height: 100vh !important;
}
.grey-p{
    width: 80% !important;
    margin-left: 10% !important;
    height: 100px !important;
    border-radius: 14px;
}
.state{
    padding-bottom:29px;
}

</style>