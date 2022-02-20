<template>
   <div class="page-container container">
    
     <div class="loading" v-if="page_load">

                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                     <div style="height:4.4rem" class="ph-item">
                        
                    </div>
                </div>
                 <div class="item">
                    <div class="ph-item">
                        
                    </div>
                     <div style="height:7.4rem" class="ph-item">
                        
                    </div>
                </div>
                
                 <div class="item">
                    <div class="ph-item">
                        
                    </div>
                     <div style="height:4.8rem" class="ph-item">
                        
                    </div>
                </div>

                 <div class="item">
                    <div class="ph-item">
                        
                    </div>
                     <div style="height:7.4rem" class="ph-item">
                        
                    </div>
                </div>
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                     <div style="height:4.4rem" class="ph-item">
                        
                    </div>
                </div>
            </div>
       <template v-else>
         <div class="title mt-2 text-dark">
           <div  style="width:50px;display:inline-block">
            <lottie-animation
      ref="anim3"
      :animationData="require('../assets/animation3.json')"
      :loop="true"
    /> </div> İŞTİRAK ETDİYİM LAYİHƏLƏR
        </div>
        <div class="projects row w-100">
            <div class="project-item col-12">
                <div class="title">
                    nizami880.az ( &copy; İTCity)
                </div>
                <div class="content">
                    Azercellin nizaminin yübileyinə həsr etdiyi layihənin back end proqramlaşdırılması.(PHP)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    kapitalbank.az ( &copy; İTCity)
                </div>
                <div class="content">
                   Ölkənin ən böyük banklarıyla rəqabət göstərən Kapitalbank'ın web saytının full stack proqramlaşdırılması.(PHP,L)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    seabreeze.az ( &copy; İTCity ,  &copy; OneStudio)
                </div>
                <div class="content">
                    Seabreeze hotelin web saytının back end proqramlaşdırılması.(PHP)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    radius.com.az ( &copy; İTCity  ,  &copy; Jeyhun Imanov Studio)
                </div>
                <div class="content">
                   E-commerce proyekt (PHP,Laravel,VueJS)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    dma.gov.az  ( &copy; İTCity  ,  &copy; Prosper)
                </div>
                <div class="content">
                   Dövlət məşguliyyət agentliyinin saytının back end proqramlaşdırılmas.(PHP,Laravel)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    cv.dma.gov.az  ( &copy; İTCity  ,  &copy; Prosper)
                </div>
                <div class="content">
                    Dövlət məşğuliyyət agentliyinin HR layihəsinin back end proqramlaşdırılması.(PHP,Laravel)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    tikin.az  ( &copy; İTCity  ,  &copy; OneStudio)
                </div>
                <div class="content">
                    Finance Group şirkətinin logistika layihəsinin back end proqramlaşdırılması.(PHP,Laravel)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    kinderland.az  ( &copy; İTCity  ,  &copy; OneStudio)
                </div>
                <div class="content">
                    PHP , Laravel
                </div>
            </div>
             <div class="project-item col-12">
                <div class="title">
                    MagicPort  ( &copy; İTCity)
                </div>
                <div class="content">
                    PHP , Laravel
                </div>
            </div>

             <div class="project-item col-12">
                <div class="title">
                   unec-jeas.com  ( &copy; İTCity)
                </div>
                <div class="content">
                    PHP , Laravel , VueJS
                </div>
            </div>

            <div class="project-item col-12">
                <div class="title">
                   irshad.az  ( &copy; İTCity)
                </div>
                <div class="content">
                    PHP , Laravel
                </div>
            </div>
        
        </div>
        <hr>
        <div class="title text-dark">
            <div  style="width:50px;display:inline-block">
            <lottie-animation
      ref="anim3"
      :animationData="require('../assets/animation3.json')"
      :loop="true"
    /> </div> LAYİHƏLƏR
        </div>
        <div class="projects row w-100">
           <div class="project-item col-12">
                <div class="title">
                    Epona (e-commerce)
                </div>
                <div class="content">
                    Epona şirkətinin e-commerce full stack proqramlaşdırıması.(NodeJS,ExpressJS,MongoDB)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                    HAZIRCAVAB
                </div>
                <div class="content">
                   Orta məktəbdə verilən test tapşırıqlarının həlləri.(PHP)
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                   Portfolio
                </div>
                <div class="content">
                   Öz portfolio'm
                </div>
            </div>
            <div class="project-item col-12">
                <div class="title">
                   E-school
                </div>
                <div class="content">
                    An application written using laravel and php
                </div>
            </div>
            <div class="project-item col-12">
                
                <div class="title">
                   Email sender application
                </div>
                <div class="content">
                    An application written using laravel and php
                </div>
            </div>
            <router-link tag="a" to="/projects" class="more-btn text-muted">
                        Digər layihələr
                    </router-link>
        </div>
        <hr>
       </template>

   </div>
</template>
<script>
import LottieAnimation from "lottie-web-vue";
export default {
    data(){
        return {
            page_load : true,
        };
    },
    mounted(){
        setTimeout(()=>{
            this.page_load = false;
        },2000)
    },
    components : {
        LottieAnimation
    }
}
</script>

