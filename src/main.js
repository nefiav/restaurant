import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let data = {
  currentID: 2,
  suggests: [{
    id: 0,
    problem: 'Please go to McDonalds!',
    name: 'Frank',
  },
  {
    id: 1,
    problem: 'I heard Empas is really good. I have never gone, can you see if it is good?',
    name: 'Michelle'
  }],
  getSuggests() {
    return this.suggests;
  },
  addSuggest(name, problem) {
    this.suggests.push({
      id: this.currentID,
      name: name,
      problem: problem
    });
    this.currentID += 1;
  },
}

new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app')
