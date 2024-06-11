// plugins/userService.js

import { registerUser } from '~/services/userService';

export default ({ app }, inject) => {
  // Injeta a função registerUser no contexto da aplicação
  inject('registerUser', registerUser);
};
