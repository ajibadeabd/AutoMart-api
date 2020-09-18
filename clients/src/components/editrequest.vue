<template>
    <div class="row">

<div class="col hide-on-small-only m3 l3 xl3">
<SD />

<!-- offset-xl2 offset-m2 offset-l2  xl8 offset-s2 -->
</div>
<div class="col offset-xl1 offset-l1 xl7 s12 l7 m7 offset-m1 ">
        <form @submit.prevent="editRequest"> 
                     <div class="card">
            <div class="card-action  white-text">
                <h3 class="center light-blue-text  ">
                    <i class=""></i>Edit REQUEST</h3>
            </div>
            <div class="card-content">
               
              
                <div class="form-field">
                    <label for="password">request</label>
                     <input type="text"
                     required
                     placeholder="edit a request"
                      v-model="edit" id="message">

                </div> <br>
                
                <div class="form-field">
                  <button class="btn-large light-blue waves-effects waves-dark"
                  style="width:100%;" 
                  type="submit">Edit</button>

                </div> <br>
                            
                        
            </div>
        </div>
      
        </form>
       
    </div>
</div>
            

</template>

<script>
import SD from "./admin-side-nave"
import Api from "../../config/Api"
export default {
    props:['id'],
    data(){
        return{
            message:'',
            edit:''
        }
    },
    components:{SD},
    methods:{
        
        editRequest(){
            let request = {
            message:this.edit
        }
        Api().put(`/editRequest/${this.id}`,request)
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
     Api().get(`/eachRequest/${this.id}`)
        .then(res=>{
            if (res.data.success) {
                this.edit=res.data.request.message
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style scoped>
h3,h4{
    padding-top:0px ;
    margin-top:0px ;
}
.card{
    width: 100%;
}
</style>