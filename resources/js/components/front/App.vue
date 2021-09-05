<template>
    <div id="#app">
        <div class="wrapper">
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
</template>

<script>
import Header from "../front/Header";
export default {
    components : {
        Header
    }
}
</script>