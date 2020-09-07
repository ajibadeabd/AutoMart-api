<template>
    <div class="cl card">
<div class="row " >
    <div >
    <div class="col green-text center s12 l12 m12">
<!-- <h4 class="center hide-on-small-only col s4  m4"></h4> -->
<h4 >
    Post ads

</h4>
<!-- <h4 class="col right s6 m4">clear field</h4> -->

    </div>
    <div class="col s12 l12 xl12 m12">
            <div class="center ad green  col s6  m6"><strong>step 1:About Ad</strong></div>
<div class="col center grey ad lighten-2 s6 m6"><strong>step 2:Ad Details</strong></div>



<div class="col   lighten-2 s12 m16 l6 xl6">
     <div class="input-field col s10 offset-s1">

          <select name="" id="">
              <option value="">dede</option>
          </select>
        </div>
        <div class='col s10  offset-s1'>
          
         <h5>  Add photo</h5>
         <p>  first picture is the title picture</p>
         <br>
         <i class="material-icons grey circle large white-text">add</i>
         <br>
         Each picture must not exceed 5 Mb <br>
         Supported formats are *.jpg, *.gif and *.png

        </div>
        </div>


<div class="col   lighten-2 s12 m16 l6 xl6">
     <div class="input-field col s10 offset-s1">

          <select name="" id="">
              <option value="">dede</option>
          </select>
        </div>
        <div class='col s10  offset-s1'>
          

        </div>
        </div>       
<br>
         
    </div>
    
    <div class="col offset-s4 offset-m4 offset-l4 offset-xl4 s4 m4 l4 xl4">
        <br>
    <br>
    <br>
             <input type="submit" value="post ads" class="btn  lighten-3">
         </div>
    </div>
</div>



    </div>
</template>
<script>
import initMaterializeComp from '../com-init/init'
export default {
  mixins: [initMaterializeComp],
    data(){
        return{

        }
    }
}
</script>
<style scoped>
 .input-field input[type=text].invalid {
     border-top: 12px solid #000 !important;
     box-shadow: 0 1px 0 0 #000;
   }
   .ad{
       height: 10vh;
       padding-top:3vh;
   }
   .cl{
       margin: 0px 10px;
       height: 110vh
   }
</style>