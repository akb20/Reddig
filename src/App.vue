<template>
    <div id="app">
        <Navbar></Navbar>
        <transition name="fade">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    name: 'app',
    data() {
        return {

        }
    },
    components: {
        Navbar
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700'); // ghetto reset
body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    color: #333;
}

.wrapper {
    width: 900px;
    margin: 0 auto;
}

.hero {
    width: 100%;
}

.fade-enter-active,
.fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
}

.fade-enter-active {
    transition-delay: .25s;
}

.fade-enter,
.fade-leave-active {
    opacity: 0
}
</style>