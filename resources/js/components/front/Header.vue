<template>

    <header>
         <a class="d-block w-100 mt-2 text-center like-btn" href="#" @click.prevent="like()">
             <div class="like-container">
                 <i :class="{'fas text-danger':true,'fa-heart':liked,'fa-heart-broken':!liked}"></i> 
                <span v-if="liked">{{like_count}}</span>
             </div>
             </a>

         <div v-if="heart_show" class="lottie-div">
             <div class="element">
                 <lottie-animation
      ref="anim"
      :animationData="require('../assets/animation.json')"
      @complete="complete"
    />
             </div>
         </div>

    
        
        <div class="row justify-content-center">
            <img class="avatar"
                src="https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318" alt="">
            
             <h3 class="text-center w-100 mt-2">Əli Babayev</h3>
              <h6 class="text-center text-muted">Web developer</h6>
                <div class="col-12 mt-1 text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
           
           
        
            
             
        </div>
        <div class="row justify-content-center">
            <menu class="pages-menu">

                <router-link tag="li" to="/" class="menu-item">
                        <a>ƏSAS</a>
                    </router-link>
 <router-link tag="li" to="/projects" class="menu-item">
                        <a>Proyektlər</a>
                        
                    </router-link>
                     <router-link tag="li" to="/skills" class="menu-item">
                        <a>Bacarıqlar</a>
                    </router-link>
                    <router-link tag="li" to="/contact" class="menu-item">
                        <a>Əlaqə</a>
                    </router-link>
                    
                        
            </menu>
        </div>
    </header>
    <!-- <transition mode="out-in" name="left">
            <div v-if="mobile && sidebar" class="navbar">
                <menu class="pages-list">
                    <router-link tag="li" to="/" class="item">
                        <a>Ana səhifə</a>
                    </router-link>
                    <router-link tag="li" to="/contact" class="item">
                        <a>Əlaqə</a>
                    </router-link>
                    <li class="item">
                        <a href="">Bacarıqlarım</a>
                    </li>
                    <li class="item">
                        <a href="">İşlərim</a>
                    </li>
                    <li class="item">
                        <a href="">Əlaqə</a>
                    </li>
                </menu>
            </div>
        </transition> -->

</template>
<script>
import LottieAnimation from "lottie-web-vue";

    export default {
        data() {
            return {
                mobile: false,
                sidebar: false,
                heart_show : false,
                liked : false,
                like_count : '',
            }
        },
        components : {
            LottieAnimation
        },
        watch : {
            heart_show(){
                // this.$refs['anim'].play();
            },
        },
        methods: {
            complete(){
                this.heart_show = false;
            },
            like(){
                if(!this.liked){
                    fetch('/api/like').then((data)=>{
                        this.heart_show = true;
                        this.liked=true;
                        this.like_count++;
                    });
                }else{
                    fetch('/api/took').then((data)=>{
                        // this.heart_show = false;
                        this.liked=false;
                        this.like_count--;
                    });
                }
            },
            resizeTrigger() {
                if (window.innerWidth <= 960) {
                    this.mobile = true;
                } else {
                    this.mobile = false;
                }
            },

        },
        created() {
            let $this = this;
            fetch('/api/likes').then((data)=>{
                let _json = data.json().then(data=>{
                    $this.liked = data.you;
                    $this.like_count = data.count;
                });
            });
            if (window.innerWidth <= 960) {
                this.mobile = true;
            }
            window.addEventListener("resize", this.resizeTrigger);
        }
    }

</script>
