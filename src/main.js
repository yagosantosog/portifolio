import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Unlazy from '@unlazy/vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Unlazy)
app.mount('#app')
