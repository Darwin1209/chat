import { Validation } from '../../utils/validations.js'

const CLASS_LABEL_VALID: string = 'info__valid_active'

export function submit(e): void {
	e.preventDefault()
}

export function focus(): void {}

export function blur(e): void {
	if (e.target.tagName !== 'INPUT') {
		return
	}
	const inp: HTMLFormElement = e.target
	inp.value = inp.value.trim()
	const valid: string = inp.dataset.valid ? inp.dataset.valid : 'no-type'
	const labelValid = inp.nextElementSibling

	if (valid !== 'passTwo') {
		const valideted: boolean = Validation[valid](inp.value)
		console.log(valideted)

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
}
