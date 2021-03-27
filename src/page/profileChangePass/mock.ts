export const fields: object[] = [
	{
		label: 'Старый пароль',
		type: 'password',
		name: 'oldPassword',
		value: '',
		validation: 'all' 
	},
	{
		label: 'Новый пароль',
		type: 'password',
		name: 'newPassword',
		value: '',
		validation: 'pass',
		validText: 'Слабый пароль',
	},
	{
		label: 'Повторите пароль',
		type: 'password',
		name: 'newPasswordCopy',
		value: '',
		validation: 'passTwo',
		validText: 'Пароли несовпадают',
	},
]
