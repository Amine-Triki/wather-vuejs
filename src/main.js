import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faLocationDot,  } from '@fortawesome/free-solid-svg-icons'
import {  faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons'

library.add(faLocationDot, faEnvelope, faUser)




const app = createApp(App)


//
.component('font-awesome-icon', FontAwesomeIcon)


app.use(router)
app.mount('#app')
