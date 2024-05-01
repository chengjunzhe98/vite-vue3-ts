import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus, { zhCn } from '@/config/element'
import Antd from '@/config/antd'
import gloablComponent from './components/index'
import '@/config/required' //引入必要配置
import router from '@/router'

const app = createApp(App)

// 安装自定义插件
app.use(gloablComponent)
// 使用element
app.use(ElementPlus, {
  // 国际化配置
  locale: zhCn,
})
// 使用antd
app.use(Antd)
app.use(router)

app.mount('#app')
