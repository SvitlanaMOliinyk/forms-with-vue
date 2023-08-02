/* eslint-disable quotes */
import { createApp } from "vue"
import App from "./App.vue"
import "./assets/global.css"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faTimes, faCaretDown } from "@fortawesome/free-solid-svg-icons"

library.add(faTimes, faCaretDown)

const app = createApp(App)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")
