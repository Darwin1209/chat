import { Validation } from '../../utils/validations.js'

const CLASS_LABEL_VALID: string = 'info__valid_active'

type Event = {
	preventDefault(): void,
	target: HTMLFormElement,
	currentTarget: HTMLFormElement,
}

export function submit(e: Event): void {
	e.preventDefault()
}

export function focus(): void {}

export function blur(e: Event): void {
	if (e.target.tagName !== 'INPUT') {
		return
	}
	const inp: HTMLFormElement = e.target
	inp.value = inp.value.trim()
	const valid: string = inp.dataset.valid ? inp.dataset.valid : 'no-type'
	const labelValid = inp.nextElementSibling

	if (valid !== 'passTwo') {
		const valideted: boolean = Validation[valid!](inp.value)
		console.log(valideted)

		valideted
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
		const valideted: boolean = Validation[valid](inp.value, pass)
		valideted
			? labelValid?.classList.remove(CLASS_LABEL_VALID)
			: labelValid?.classList.add(CLASS_LABEL_VALID)
	}
}
