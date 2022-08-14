import { createApp } from "vue";
import App from "./App.vue";
// import { Vue } from 'vue';


import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { library } from '@fortawesome/fontawesome-svg-core'

import { faHatWizard } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHatWizard)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).mount("#app");
