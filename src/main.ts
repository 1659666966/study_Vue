import { createApp } from 'vue'
import App from './App.vue'
import elementplus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './routes'
import store from './vuex/store'


const app = createApp(App)
app.use(elementplus)
app.use(router)

//挂载vuex
app.use(store)

app.mount('#app')




