<template>
<div>
    <div v-if="loading" class="lottie-div" style="background:white;">
             <div class="element">
                 <lottie-animation
      ref="anim"
      :animationData="require('../assets/animation3.json')"
    />
             </div>
         </div>
         <transition name="scale" mode="out-in">
    <div id="#app" v-if="!loading">
         
        <div class="wrapper" >
            
            <Header/>
            <main>
                <transition name="page" mode="out-in">
                    <router-view></router-view>
                </transition>

            </main>
        </div>
        <footer class="center">
            &copy;2021
    </footer> 
    </div>
     </transition>
</div>
</template>

<script>
import Header from "../front/Header";
import LottieAnimation from "lottie-web-vue";
export default {
    data(){
        return {
            loading:true,
        }
    },
    components : {
        Header,
        LottieAnimation,

    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
        },1000);
    },
}
</script>