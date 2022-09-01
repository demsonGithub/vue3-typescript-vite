import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import piniaStore from './store'

import { SvgIcon, SvgIconProps } from '@/components/SvgIcon/index'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

app.use(router)
app.use(piniaStore)
app.mount('#app')
