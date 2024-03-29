import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter("Ucase",function(val){
  return val.toUpperCase();
})
Vue.filter("currencyConverter",function(val){    //added for balance to dollar
  return val*75
})
new Vue({
  render: h => h(App),
}).$mount('#app')
