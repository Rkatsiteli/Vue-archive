"use strict";

import Vue from 'vue';

import App from 'views/App.vue';
const app = new Vue({
	render: h => h(App),
}).$mount('#app')