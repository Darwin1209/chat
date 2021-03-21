export const fields: object[] = [
	{
		label: 'Старый пароль',
		type: 'password',
		name: 'oldPassword',
		value: 'email@gmail.com',
	},
	{
		label: 'Новый пароль',
		type: 'password',
		name: 'newPassword',
		value: 'newPassword',
		validation: 'pass',
		validText: 'Слабый пароль',
	},
	{
		label: 'Имя',
		type: 'password',
		name: 'newPasswordCopy',
		value: 'newPasswordCopy',
		validation: 'passTwo',
		validText: 'Пароли несовпадают',
	},
]
