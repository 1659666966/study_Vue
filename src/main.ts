import { createApp } from 'vue'
import App from './App.vue'
import aa from 'element-plus'

import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(aa)


app.mount('#app')


