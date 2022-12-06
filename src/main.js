import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import './registerServiceWorker'

import store from './store'
app.use(store)

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faTwitter)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

// app.config.productionTip = false

import BaseContainer from './assets/BaseContainer.vue'
app.component('base-container', BaseContainer)
app.mount('#app')
