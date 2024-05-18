import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'
import vueFlex from 'vue-flex' //Primero lo instalo con npm install vue-flex
import VueDatePicker from '@vuepic/vue-datepicker';


//calendario
import '@vuepic/vue-datepicker/dist/main.css'
//estilos generales
import './assets/css/styles.css'
import './assets/js/bootstrap.bundle.js'
import './assets/js/scripts.js'
import './assets/js/fontawesome/all.min.js'



//datatable con ajax
// import './assets/js/datatables/bootstrap.bundle.min.js'
// import './assets/js/datatables/dataTables.js'
// import './assets/js/datatables/dataTables.bootstrap5.js'
// import './assets/js/datatables/jquery-3.7.1.js'

// import './assets/css/bootstrap.min.css'
// import './assets/css/dataTables.bootstrap5.css'



//configuracion calendarios con datapicker

// const calend = createApp(App);
// calend.component('VueDatePicker', VueDatePicker);
// calend.mount('#calend');

createApp(App).use(store).use(router).use(vueFlex).mount('#app')

