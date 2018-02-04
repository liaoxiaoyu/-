// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import App from './App'

import { Group, Cell, Tabbar, TabbarItem, Panel, TabItem, Tab, XInput } from 'vux'

Vue.component('Group', Group)
Vue.component('Cell', Cell)
Vue.component('Tabbar', Tabbar)
Vue.component('TabbarItem', TabbarItem)
Vue.component('TabItem', TabItem)
Vue.component('Tab', Tab)
Vue.component('Panel', Panel)
Vue.component('XInput', XInput)


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
