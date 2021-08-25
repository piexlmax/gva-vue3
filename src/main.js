import { createApp } from 'vue'
// 引入gin-vue-admin前端初始化相关内容
import './core/gin-vue-admin'

// 引入封装的router
import router from '@/router/index'
import { run } from '@/core/gin-vue-admin.js'
import '@/permission'
import { store } from '@/store/index'

import { auth } from '@/directive/auth'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
const app = createApp(App)
run(app)
auth(app)
app.config.productionTip = false
app.use(store).use(router).use(ElementPlus).mount('#app')

export default app
