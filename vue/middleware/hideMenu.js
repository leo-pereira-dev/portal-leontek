// middleware/hideMenu.js
export default function ({ store, route }) {
  let loginPage = false;

  // Verifica se a rota atual é a página de login
  if (route.path === '/login' || route.path ==='/registrar') {
    loginPage = true;
  }

  // Armazena o valor no store
  store.commit('setLoginPage', loginPage);
}
