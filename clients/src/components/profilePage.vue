<template>
    
    <div>
        
        <div class="row">
<!-- <div class="green">
    <div class="col s10 m8 l8 xl8 offset-s1 offset-l2 offset-m2 offset-xl2 ">

<img src="https://static.jiji.ng/static/img/main-page/man.png"
 class="responsive-img circle" alt="">

    </div>
    <div class="col s10 m8 l8 xl8 offset-s1 offset-l2 offset-m2 offset-xl2 "></div>
    <div class="col s10 m8 l8 xl8 offset-s1 offset-l2 offset-m2 offset-xl2 "></div>
    dd
</div> -->
<div class="col card  l4 m4 s12">
<div class="row green ">
    <div class="col m12 l12 xl12 s12">
        <div class=' center image'>
            image
        </div>
        <div class="center"> 
            <strong class="white-text ">KORD TECHNOLOGY HUB</strong>
            <div class="white-text">
                08090903620
            </div>
            <br>
        </div>
        <div></div>
    </div>
</div>

<div class="row orange ">
    <div class=' show col white-text m4 s4 l4 xl4 show'>show 1</div>
    <div class='col right  m6 s6 l6 xl6 '>
        <span class="white-text right ">Alert</span>
         <span class="right material-icons white-text">notifications</span>

        </div>
        

</div>
<div class="row">
    <div class="col"><i class="material-icons">phone</i></div>
<div class="green-text"> <span>accesssories  </span></div><br>
<div class="divider"></div>
     <br>
      <div class="col"><i class="material-icons">phone</i></div>
<div class="green-text"> <span>accesssories  </span></div><br>
<div class="divider"></div>
     <br>
      <div class="col"><i class="material-icons">phone</i></div>
<div class="green-text"> <span>accesssories  </span></div><br>
<div class="divider"></div>
     <br>
      <div class="col"><i class="material-icons">call</i></div>
<div class="green-text"> <span>manager's  </span></div><br>
<div class="divider"></div>
     <br>
      <div class="col"><i class="material-icons">settings</i></div>
<div class="green-text"> <span>accesssories  </span></div><br>
<div class="divider"></div>
     <br>

</div>
<br>
        <br>
        <br>
</div>
<div class='col s12 m8 l8 xl8'>
 <div class="row card ">
    <div class="col s12">
      <ul class="tabs green">
        <!-- <li class="tab col s3"><a class="white-text" href="#test1">Phone & Accessories</a></li> -->
        <!-- <li class="tab col s3"><a   >Wears</a></li> -->
        <li class="tab col s3 "><a class=" white-text active" href="#test2">Decline</a></li>
        <li class="tab col s3"><a a class="white-text" href="#test3">Reviewing</a></li>
        <li class="tab col s3"><a a class="white-text" href="#test1">Active</a></li>
      </ul>
    </div>
    <div id="test1" class="col s12">Test 1</div>
    <div id="test2" class="col s12">Test 2</div>
    <div id="test3" class="col s12">Test 3</div>
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
    },
    mounted(){
        
        $(document).ready(function(){

        $('.tabs').tabs();

        })
    }
}
</script>
<style scoped>

img{
    width: 60%;
    height: 60%;
}
.show{
    border-radius: 10px;
    margin: 4px 10px 4px 10px;

}
div{
    padding: 0px;
    margin: 0px;
}
</style>