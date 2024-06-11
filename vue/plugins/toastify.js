// plugins/toastify.js
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export default (_, inject) => {
  inject('toastify', Toastify)
}
