import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
import './registerServiceWorker'

import store from './store'
app.use(store)


app.mount('#app')
