import Vue from 'nativescript-vue'

import Welcome from './components/Welcome'
import Login from './components/Login'

new Vue({
  render: (h) => h('frame', [h(Welcome)]),
}).$start()
