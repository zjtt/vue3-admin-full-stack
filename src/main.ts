import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'
// Normalize.css只是一个很小的CSS文件,但它在默认的HTML元素样式上提供了跨浏览器的高度一致性
// 初始化css 重置css默认样式
import 'normalize.css/normalize.css'
// 全局 css
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import initSvgIcon from '@/icons/index'
// element-plus
import installElementPlus from './plugins/element'
// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

const app = createApp(App)
installElementPlus(app)
app.use(store);
// app.use(ElementPlus);
app.use(initSvgIcon);
app.use(router);
app.mount('#app')
