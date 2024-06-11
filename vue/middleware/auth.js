export default function ({ store, redirect, route }) {
  // Verifica se o usuário está autenticado
  if (false) {
    // Verifica se a rota atual é diferente da rota específica (por exemplo, '/login')
    if (route.path !=='/login') {
      return redirect('/login'); // Redireciona para a página de login se não estiver autenticado e não for a rota '/login'
    }
  }
}
