import Vue from 'vue';

export function goToPage(route) {
  this.$router.push(route);
}

Vue.prototype.$goToPage = goToPage;
