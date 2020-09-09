<template>
    <div>
<div class="container  row">
    <div class="col b m12 s12 l5 xl5">
        <div class="row">
             <div class="col card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://materializecss.com/images/office.jpg">
    </div>
    <div class="card-content">
      <h4>Chair</h4>

      <span class="card-title activator grey-text text-darken-4">
                DESCRIPTON
          <i class="material-icons right">more_vert</i></span>
      <p><strong>Price</strong>:3000</p>
      <p>Owner:kord</p>
      <br>
      <div class="divider"></div>
      <br>
      <p class='green col white-text phone'>
          <i class="material-icons">phone</i>
      show contact</p>
      <br>
      <div class="col s12 green-text">request seller to contact</div>

<br>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
        </div>
    </div>
    <div class="col m12 s12 l6 xl6">
        <div class="row">
            <div class="col m12 s12 l12  card">
                <div class="green center col s12 m12 l12 xl12  white-text price ">#2,000</div>
                <br>
                <br>
                <br>
                <div class="col   offset-s4 offset-m4 offset-l4 
                offset-xl4 white-text ligthen-1 center s4 m4 l4 xl4 ">
                    <div class="red logo">
                        N
                    </div>

                </div>
                
                <div class="col white-text feed orange s12 m12 xl12 l12 center">
              
                    LEAVE A FEED BACK
                </div>
                <br>
                <div class="divider  "></div>
                <div class="col   orange-text s12 m12 xl12 l12 ">
                        <br>
              
                    <div class="col s6 m6 center">
                        27 JULY 2022.
                        </div>
                    <div class="col s6 m6 center">52 MINUTE AGO</div>
                    <div class="col s6 m6 grey-text center">Registered</div>
                    <div class="col s6 m6 grey-text center">Last seen</div>
                </div>
                
              <div class="">
              <p class='  a col s12  white green-text  center phone'>
          <i class="material-icons">phone</i>
                  show contact</p>
       <p class='  a col s12  green white-text  center phone'>
          <!-- <i class="material-icons">phone</i> -->
      start chat with seller
      </p>
                </div>
                <div class="col s12 m12 l12 x">
                    
                </div>
                <br>

                
               
            </div>
    </div>
    </div>
</div>

    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
<style scoped>
.phone{
    border-radius: 4px;
}
.logo{
    border-radius: 600vh;
    padding-top: 4vh;
    height: 150px !important;
    width: 150px !important;
    font-size: 50px;

}
.feed{
    font-size: 24px;
    border-radius: 2px;
    margin-top: 5.5vh;
}
.price{
    height: 50px;
    font-size: 30px;
    border-radius: 2px;

}
.a{
    padding: 10px;
    border:1px solid ;
}
.card{
    /* margin-right:33px; */
    padding: 0px;
}
.b{
    margin-right: 10px !important;
}
</style>