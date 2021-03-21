import Router from './routers/Router.js'
import Main from './page/main/index.js'

const app = new Router('#root')

app.use('/', Main, 'Главная').start()

console.log('hey')
// app.go('/chats')
