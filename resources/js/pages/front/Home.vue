<template>
    <div class="home-container page-container container">
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
                <div class="item">
                    <div class="ph-item">
                        
                    </div>
                     <div style="height:4.4rem" class="ph-item">
                        
                    </div>
                </div>
            </div>


       <template v-else>
            
            <p>
            <div style="width:50px;display:inline-block">
                <lottie-animation
      ref="anim"
      :animationData="require('../assets/animation2.json')"
      :loop="true"
    />
            </div>
            Salam mənim adım Əlidir.Mən 2002-ci il avqust ayının 2-də Lənkaran rayonunun Kənarmeşə kəndində doğulmuşam.Kiçik yaşlarımdan web proqramlaşdırma haqqında araşdırmalar etmişəm.İlk öncə HTML , CSS və JavaScript biliklərinə yiyələnib hazircavab.org saytının front-end proqramlaşdırılmasında iştirak etmişəm.Daha sonra 2019-cu ildə 519 bal toplayaraq ADNSU üniversitetinə daxil olmuşam.Boş vaxtlarımı PHP,Laravel,VueJS öyrənməklə keçirdib bu sahə üzrə müəyyən təcrübə qazandıqdan sonra ilk olarq Pronet şirkətində qısa müddətli intern olmuşam.Daha sonralar isə İTcity şirkəti ilə birliktə bir neçə özəl və dövlət layihələrində iştirak etmişəm.
            </p>
        <hr>
        <div class="title text-dark">
            <div  style="width:50px;display:inline-block">
            <lottie-animation ref="anim2"
        :animationData="require('../assets/animation.json')"
            :loop="true"
    /> </div> BACARIQLARIM
        </div>
        <div class="skills row w-100">
            <div class="item w-100 mb-2">
                <div class="col-12">
                    PHP
                </div>
                <div class="col-12">
                    <div class="progress w-100">
                        <div class="progress-bar bg-dark" role="progressbar" style="width: 85%;" aria-valuenow="85"
                            aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                </div>
            </div>
            <div class="item w-100 mb-2">
                <div class="col-12">
                    Laravel
                </div>
                <div class="col-12">
                    <div class="progress w-100">
                        <div class="progress-bar bg-dark" role="progressbar" style="width: 80%;" aria-valuenow="80"
                            aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>
                </div>
            </div>
            <div class="item w-100 mb-2">
                <div class="col-12">
                    Node JS
                </div>
                <div class="col-12">
                    <div class="progress w-100">
                        <div class="progress-bar bg-dark" role="progressbar" style="width: 75%;" aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100">55%</div>
                    </div>
                </div>
            </div>
            <div class="item w-100">
                <div class="col-12">
                    ExpressJS
                </div>
                <div class="col-12">
                    <div class="progress w-100">
                        <div class="progress-bar bg-dark" role="progressbar" style="width: 75%;" aria-valuenow="75"
                            aria-valuemin="0" aria-valuemax="100">55%</div>
                    </div>
                </div>
            </div>
            <router-link tag="a" to="/skills" class="more-btn text-muted">
                        Digər bacarıqlar
                    </router-link>
        </div>
        <hr>
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
            <router-link tag="a" to="/projects" class="more-btn text-muted">
                        Digər layihələr
                    </router-link>
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
            <!-- <div class="project-item col-12">
                <div class="title">
                   E-school
                </div>
                <div class="content">
                    This is my Portfolio website. There is all information about me, my skills and e.t.c.
                    We started individual project with my friend. He developed back-end and I developed Front-end. This project we have in Github. We have closed project becease of Education.
                </div>
            </div>
            <div class="project-item col-12">
                
                <div class="title">
                   Email sender application
                </div>
                <div class="content">
                    An application written using laravel and php
                </div>
            </div> -->
            <router-link tag="a" to="/projects" class="more-btn text-muted">
                        Digər layihələr
                    </router-link>
        </div>

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
