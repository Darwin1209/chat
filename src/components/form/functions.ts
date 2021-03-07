import { Validation } from './validations.js'

const CLASS_LABEL_INPUT: string = 'form-reg__title-input_active'
const CLASS_LABEL_VALID: string = 'form-reg__valid-input_active'

type Event = {
	preventDefault(): void,
	target: HTMLFormElement,
	currentTarget: HTMLFormElement,
}

export function submit(e: Event): void {
	e.preventDefault()
	const data: string = 'Тайпскрипт говно'
	console.log(data)
}

export function focus(e: Event): void {
	if (e.target.tagName !== 'INPUT') {
		return
	}
	const inp = e.target
	const label = inp.previousElementSibling
	if (inp.value === '') {
		label?.classList.toggle(CLASS_LABEL_INPUT)
	}
}

export function blur(e): void {
	if (e.target.tagName !== 'INPUT') {
		return
	}
	const inp: HTMLFormElement = e.target
	inp.value = inp.value.trim()
	const valid: string = inp.dataset.valid ? inp.dataset.valid : 'no-type'
	const label = inp.previousElementSibling
	const labelValid = inp.nextElementSibling

	if (valid !== 'passTwo') {
		valid
		const valideted: boolean = Validation[valid](inp.value)
		valideted
			? labelValid?.classList.remove(CLASS_LABEL_VALID)
			: labelValid?.classList.add(CLASS_LABEL_VALID)
	} else {
		const valideted = Validation[valid](
			inp.value,
			e.currentTarget.elements.password.value
		)
		valideted
			? labelValid?.classList.remove(CLASS_LABEL_VALID)
			: labelValid?.classList.add(CLASS_LABEL_VALID)
	}

	if (inp.value === '') {
		label?.classList.toggle(CLASS_LABEL_INPUT)
	}
}
