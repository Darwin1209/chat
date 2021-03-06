export function submit(e): void {
	e.preventDefault()
	const data: string = 'Тайпскрипт говно'
	console.log(data)
}

export function focus(e): void {
	if (e.target.tagName !== 'INPUT') {
		return
	}
	const inp = e.target
	const label = inp.nextElementSibling
	label.classList.toggle('form-reg__title-input_active')
}

export function blur(e): void {
	if (e.target.tagName !== 'INPUT') {
		return
	}
	const inp = e.target
	const label = inp.nextElementSibling
	label.classList.toggle('form-reg__title-input_active')
}
