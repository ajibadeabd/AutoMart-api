<template>
    <div class="row">

 
<div class="col hide-on-small-only m3 l3 xl3">
<SD />
</div>
<div class="col xl9 card  S12 l9 m9 ">
    <div class=" ">
         <div class="row">
        <div class="col m8 s8 l8 xl8 offset-s2 offset-xl2 offset-m2 offset-l2 ">
                <form @submit.prevent="makeRequest"> 
                     <div class="card">
            <div class="card-action  white-text">
                <h3 class="center light-blue-text  ">
                    <i class="fa fa-sign-in"></i> MAKE REQUEST</h3>
            </div>
            <div class="card-content">
               
              
                <div class="form-field">
                    <label for="password">request</label>
                     <input type="text"
                     required
                     placeholder="make a request"
                      v-model="message" id="message">

                </div> <br>
                
                <div class="form-field">
                  <button class="btn-large light-blue waves-effects waves-dark"
                  style="width:100%;" 
                  type="submit">REQUEST</button>

                </div> <br>
                            
                        
            </div>
        </div>
      
        </form>
        </div>
             

    </div>
    </div>
   
       
       
    </div>
</div>
            

</template>

<script>
import Api from "../../../config/Api"
import SD from "../admin-side-nave"
export default {
    data(){
        return{
            message:''
        }
    },
    components:{SD},
    methods:{
        
        makeRequest(){
            let request = {
            message:this.message
        }
        Api().post('/postEachUserRequest',request)
        .then(res=>{
            if (res.data.success) {
                this.$store.state.success=res.data.msg
               this.$router.push('/dashboard')
            }
        })
        .catch(err=>{
            console.log(err)
        })

        }
    },
    created(){
    
    }
}
</script>
<style scoped>
h3,h4,div{
    padding-top:0px ;
    /* margin-top:0px ; */
}
.card{
    width: 100%;
}
.c{
    min-height: 100vh;

}
</style>