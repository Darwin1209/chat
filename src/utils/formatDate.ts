export const formatDate = (date: string) => {
	const text = new Intl.DateTimeFormat('ru-RU', {
		day: 'numeric',
		month: 'long',
	}).format(new Date(date))

	return text
}
