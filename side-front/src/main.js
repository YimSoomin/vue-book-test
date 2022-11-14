import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mixins from '@/mixins'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(store);
app.use(router);
app.use(mixins);
app.use(VueSweetalert2);
app.mount('#app');

window.Kakao.init('65b1dff57334618af6941a3c33edca7f');