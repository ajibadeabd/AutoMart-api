<template>
    <div class="red center lighten-2">


{{error}}


    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        error(){
            return this.$store.getters.error
        }
    },
    watch:{
        '$store.getters.error'(){
            if(this.$store.getters.error) {

                setTimeout((req,res,next)=>{
                this.$store.state.error=''
                },6000)
            }
        }
    }
}
</script>

<style scoped>
.red{
   border-radius: 5px;
    font-size: 3vh;
    margin: 20px ;
    text-transform: uppercase;
}
div.red{
    margin: 0px;
    padding: 0px;
}
</style>