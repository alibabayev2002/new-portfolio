<template>

    <header>
        <div class="row justify-content-center">
            <img class="avatar"
                src="https://cdnb.artstation.com/p/assets/images/images/009/836/467/medium/maria-bo-schatzis-stream-profilpicture.jpg?1521139318" alt="">
            
                <div class="col-12 mt-3 text-center">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
            
            <h6 class="text-center text-muted">Web developer</h6>
        </div>
        <div class="row justify-content-center">
            <menu class="pages-menu">
                <router-link tag="li" to="/" class="menu-item">
                        <a>Home</a>
                    </router-link>
 <router-link tag="li" to="/projects" class="menu-item">
                        <a>Projects</a>
                        
                    </router-link>
                     <router-link tag="li" to="/skills" class="menu-item">
                        <a>Skills</a>
                    </router-link>
                    <router-link tag="li" to="/contact" class="menu-item">
                        <a>Contact</a>
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
    export default {
        data() {
            return {
                mobile: false,
                sidebar: false
            }
        },
        methods: {
            resizeTrigger() {
                if (window.innerWidth <= 960) {
                    this.mobile = true;
                } else {
                    this.mobile = false;
                }
            },

        },
        created() {
            if (window.innerWidth <= 960) {
                this.mobile = true;
            }
            window.addEventListener("resize", this.resizeTrigger);
        }
    }

</script>
