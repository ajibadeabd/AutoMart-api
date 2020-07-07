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
            <h3 class="center">      All Requests</h3> <br>
                <!-- <input type="text" name="" v-model='search' id=""> -->
            <br>
            <div class="row">
                <div class="col l4 m4 s12 xl4">
                     <input type="text" name=""  placeholder='Search By message' v-model='searchByMessage' id="d">
                </div>
                <div class="col l4 m4 s12 xl4">
                     <input type="text" name=""  placeholder='Search By status' v-model='searchBystatus' id="s">
                </div>
                <div class="col l4 m4 s12 xl4">
                     <input type="text" name=""  placeholder='Search By user' v-model='searchByUser' id="c">
                </div>
            </div>

           <div v-if="requests"  class="row">
                <div  v-for="(request,index) in sort"
                 :key='index' class="col s12 m12 l6 xl6">
                         <div  class=" row">
     <div  class="row grey bt request">
        <div class="col m10 l10 message  offset-s1    offset-m1    offset-xl1    offset-l1 s10 white xl10">  {{request.message}} </div>
    <div  class="col m6 l4 s6 xl3">
      <strong>status:</strong>   {{request.status}} </div>
    <div class="col m6 l4 s6 xl3"> <strong>user:</strong>
    {{request.user_id}}
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
            requests:'',
            search:'',
            searchByMessage:'',
            searchBystatus:'',
            searchByUser:'',
        }
    },
    methods:{

    },
    components:{
        SD
    },
    computed:{
        sort(){
            return this.requests.filter(request=>{
                if(!this.searchByMessage && !this.searchBystatus && this.searchByUser){
                return request.user_id.indexOf(this.searchByUser.toLowerCase()) > -1

                }
                else if(!this.searchByMessage && this.searchBystatus && !this.searchByUser) {
                return request.status.indexOf(this.searchBystatus.toUpperCase()) > -1

                }
                else if(this.searchByMessage && !this.searchBystatus && !this.searchByUser) {
                return request.message.indexOf(this.searchByMessage.toLowerCase()) > -1

                }else{
                return request.status.indexOf(this.search.toUpperCase()) > -1

                }
                // return request.status.indexOf(this.search.toUpperCase()) > -1
                // return request.message.indexOf(this.search.toUpperCase()) > -1
                // return request.message.indexOf(this.search.toLowerCase()) > -1
                // return request.status.indexOf(this.search.toUpperCase()) > -1
            })
        }
    },
    created(){
        Api().get('/viewAllRequestByAdmin') 
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
    min-height: 13vh !important;
}
.bt{
    margin: 8px !important;
}

.message{
     /* width:90% !important;
     overflow: auto;
     background-color: white; */
     margin-top: 15px  !important;
     height:110px !important;

     }  
</style>