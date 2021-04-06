import { Validation } from '../../utils/validations.js'

import UserController from '../../controlers/authControler.js'

const CLASS_LABEL_INPUT: string = 'form-reg__title-input_active'
const CLASS_LABEL_VALID: string = 'form-reg__valid-input_active'

type Event = {
	preventDefault(): void
	target: HTMLFormElement
	currentTarget: HTMLFormElement
}

export function submit(e: Event, type: string): void {
	e.preventDefault()
	const prepData = new Array(
		...(e.currentTarget.querySelectorAll('input') as any)
	)
	const notValid = prepData.some((el) => {
		let value = el.value
		let valid = el.dataset.valid
		if (valid === 'passTwo') {
			const pass = prepData.find((el) => el.name === 'password')
			return !Validation[valid](value, pass.value)
		}
		return !Validation[valid](value)
	})

	if (notValid) {
		return
	}

	const form = new FormData(e.currentTarget) as any
	const formData = [...form]
	const data: any = {}
	formData.forEach(([key, value]) => {
		data[key] = value
	})

	if (type === 'auth') {
		UserController.login(data)
		return
	}

	if (type === 'registration') {
		UserController.registration(data)
		return
	}
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

export function blur(e: Event): void {
	if (e.target.tagName !== 'INPUT') {
		return
	}
	const inp: HTMLFormElement = e.target
	inp.value = inp.value.trim()
	const valid: string = inp.dataset.valid ? inp.dataset.valid : 'no-type'
	const label = inp.previousElementSibling
	const labelValid = inp.nextElementSibling

	if (valid !== 'passTwo') {
		const validated: boolean = Validation[valid](inp.value)
		validated
			? labelValid?.classList.remove(CLASS_LABEL_VALID)
			: labelValid?.classList.add(CLASS_LABEL_VALID)
	} else {
		let pass
		for (let i = 0; i < e.currentTarget.elements.length; i++) {
			const item = e.currentTarget.elements[i] as HTMLInputElement
			if (item.name === 'password') {
				pass = item.value
				break
			}
		}
		const validated = Validation[valid](inp.value, pass)
		validated
			? labelValid?.classList.remove(CLASS_LABEL_VALID)
			: labelValid?.classList.add(CLASS_LABEL_VALID)
	}

	if (inp.value === '') {
		label?.classList.toggle(CLASS_LABEL_INPUT)
	}
}
