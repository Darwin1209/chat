export const fields: object[] = [
	{
		type: 'text',
		name: 'login',
		validation: 'login',
		label: 'Логин',
		validText: 'Невалидный логин',
	},
	{
		type: 'password',
		name: 'password',
		validation: 'pass',
		label: 'Пароль',
		validText: 'Слабый пароль',
		pass: true,
	},
]
