import { createApp } from 'vue'
import App from './App.vue'

// 引入样式文件
import '@/styles/index.scss'

// 引入svg必要配置
import 'virtual:svg-icons-register'

const app = createApp(App)

// 引入elementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// 国际化配置
app.use(ElementPlus, {
  locale: zhCn,
})

// 全局引入antd
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
app.use(Antd)

// 安装自定义插件
import gloablComponent from './components/index'
app.use(gloablComponent)

app.mount('#app')
