// store/index.js
export const state = () => ({
  loginPage: false,
});

export const mutations = {
  setLoginPage(state, value) {
    state.loginPage = value;
  },
};
