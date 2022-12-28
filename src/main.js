import { createApp } from "vue";
import App from "./App.vue";
import "/responsive.css"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import router from "./router";
import store from "./store";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// import {
//     faTwitter,
//     fainstagram,
//     fafacebook,
//     fadribbble,
// } from "@fortawesome/free-brands-svg-icons";
import { faTwitter, faInstagram, faFacebook, faDribbble } from "@fortawesome/free-brands-svg-icons";

import { faQuoteRight, faHouse, faPhone, faEnvelope, faBars, } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faQuoteRight, faHouse, faEnvelope, faBars, faPhone, faTwitter, faInstagram, faFacebook, faDribbble);

createApp(App)
    .use(store)
    .use(router)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app");
