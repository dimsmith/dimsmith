import Vue from "vue"
import App from "../views/App.vue"

const opts = {
    el: "#app",
    ...App
}
new Vue(opts)