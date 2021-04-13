import Router from './routers/Router'

import Main from './page/main/index'
import Auth from './page/auth/index'
import Profile from './page/profile/index'
import Registration from './page/registration/index'
import ProfileChangeData from './page/profileChangeData/index'
import ProfileChangePass from './page/profileChangePass/index'
import E404 from './page/404/index.js'
import E500 from './page/500/index.js'

const app = new Router('#root')

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
