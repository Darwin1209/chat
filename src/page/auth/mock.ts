export const fields: object[] = [
	{
		type: 'text',
		name: 'login',
		validation: 'all',
		label: 'Логин',
		// validText: 'Невалидный логин',
	},
	{
		type: 'password',
		name: 'password',
		validation: 'all',
		label: 'Пароль',
		// validText: 'Слабый пароль',
		pass: true,
	},
]
