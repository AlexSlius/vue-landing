import { createApp } from 'vue';
import App from './App.vue';

// custom directives
import { addClassByScroll } from "@/customDirectives/addClassByScroll";
import { addClassActiveLink } from "@/customDirectives/addClassActiveLink";

let app = createApp(App);
app.directive('addClassByScroll', addClassByScroll);
app.directive('addClassActiveLink', addClassActiveLink);
app.mount('#app')
