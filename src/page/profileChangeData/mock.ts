export const fields: object[] = [
	{
		label: 'Почта',
		type: 'text',
		name: 'email',
		value: 'email@gmail.com',
		validation: 'mail',
		validText: 'Невалидный email',
	},
	{
		label: 'Логин',
		type: 'text',
		name: 'login',
		value: 'login',
		validation: 'login',
		validText: 'Невалидный логин',
	},
	{
		label: 'Имя',
		type: 'text',
		name: 'first_name',
		value: 'Иван',
		validation: 'text',
		validText: 'Имя содержет недопустимые символы',
	},
	{
		label: 'Фамилия',
		type: 'text',
		name: 'second_name',
		value: 'Иванов',
		validation: 'text',
		validText: 'Фамилия содержет недопустимые символы',
	},
	{
		label: 'Имя в чате',
		type: 'text',
		name: 'display_name',
		value: 'Иван',
		validation: 'text',
		validText: 'Имя в чате набрано неправильно',
	},
	{
		label: 'Телефон',
		type: 'text',
		name: 'phone',
		value: '+7 (999) 999 30 37',
		validText: 'Телефон набран неправильно',
		validation: 'phone',
	},
]
