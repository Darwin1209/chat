import Router from './routers/Router.js'
import Store from './store/Store.js'

import Main from './page/main/index.js'
import Auth from './page/auth/index.js'
import Profile from './page/profile/index.js'
import Registration from './page/registration/index.js'
import ProfileChangeData from './page/profileChangeData/index.js'
import ProfileChangePass from './page/profileChangePass/index.js'
import E404 from './page/404/index.js'
import E500 from './page/500/index.js'

const app = new Router('#root')
new Store()

app
	.use('/', Main, 'Главная')
	.use('/auth', Auth, 'Авторизация')
	.use('/registration', Registration, 'Регистрация')
	.use('/profile', Profile, 'Профиль')
	.use('/change-pass', ProfileChangePass, 'Изменение пароля')
	.use('/change-data', ProfileChangeData, 'Изменение профиля')
	.use('/500', E500, '500')
	.use('/404', E404, '404')
	.start()
