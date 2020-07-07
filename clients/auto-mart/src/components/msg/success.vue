<template>
    <div class="blue center">

        {{success}}
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    computed:{
        success(){
            return this.$store.getters.success
        }
    },
    watch:{
        '$store.getters.success'(){
            if(this.$store.getters.success) {

                setTimeout((req,res,next)=>{
                this.$store.state.success=''
                },6000)
            }
        }
    }
}
</script>

<style scoped>
.blue{
    border-radius: 5px;
    font-size: 3vh;
    margin: 20px ;
    text-transform: uppercase;
}
div.red{
    margin: 0px;
    padding: opx;
}
</style>