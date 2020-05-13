import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faGitlab, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./../node_modules/bulma/css/bulma.min.css";
import "./assets/style/main.css"

library.add(faBars, faEnvelope, faGithub, faGitlab, faTwitter)
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
