<template>
    <div>
<div class="row">
    <div class="col m12 s12 l6 xl6">
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
      <div class="divider"></div>
      <p class='green col white-text phone'>
          <i class="material-icons">phone</i>
      show contact</p>
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
                <div class="green center  white-text price ">#2,000</div>
                <br>
                <div class="col red logo offset-s4 offset-m4 offset-l4 
                offset-xl4 white-text ligthen-1 center s4 m4 l4 xl4 ">
                    N

                </div>
                
                <div class="col white-text feed orange s12 m12 xl12 l12 center">
              
                    LEAVE A FEED BACK
                </div>
                <div class="col white-text  s12 m12 xl12 l12 center">
                    <div class="divider"></div>
                    </div>
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
    border-radius: 200px;
    height: 100px;
    font-size: 50px;

}
.feed{
    font-size: 24px;
    border-radius: 2px;
}
.price{
    height: 50px;
    font-size: 30px;
    border-radius: 2px;

}
</style>