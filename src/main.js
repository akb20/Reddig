import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import IndieHeads from './components/Indieheads.vue'
import Listen from './components/Listen.vue'
import Mixes from './components/Mixes.vue'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/indieheads', component: IndieHeads },
        { path: '/listen', component: Listen },
        { path: '/mixes', component: Mixes }
    ]

})

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})
