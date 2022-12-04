import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import './registerServiceWorker'

import store from './store'
app.use(store)

import BaseContainer from './assets/BaseContainer.vue'
app.component('base-container',BaseContainer)
app.mount('#app')
