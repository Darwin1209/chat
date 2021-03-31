import { Validation } from '../../utils/validations.js'

const CLASS_LABEL_VALID: string = 'info__valid_active'

import UserController from '../../controlers/userControler.js'
import AuthController from '../../controlers/authControler.js'

type Event = {
	preventDefault(): void
	target: HTMLFormElement
	currentTarget: HTMLFormElement
}

export function submit(e: Event): void {
	e.preventDefault()
	const form: HTMLFormElement = e.target
	const action: string = form.dataset.type || 'none'

	if (action === 'avatar') {
		const avatar: HTMLInputElement = form.querySelector('input').files[0]

		UserController.changeAvatar(avatar)

		return
	}

	const prepData = new Array(...form.querySelectorAll('input'))
	const notValid = prepData.some((el) => {
		let value = el.value
		let valid = el.dataset.valid

		if (valid === 'passTwo') {
			const pass = prepData.find((el) => el.name === 'newPassword')
			return !Validation[valid](value, pass.value)
		}
		return !Validation[valid](value)
	})

	if (notValid) {
		return
	}

	const formValue = new FormData(form)
	const formData = [...formValue]
	const data = {}
	formData.forEach(([key, value]) => {
		data[key] = value
	})

	if (action === 'data') {
		UserController.changeProfile(data)
	}

	if (action === 'pass') {
		delete data.newPasswordCopy
		UserController.changePassword(data)
	}
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
		valideted
			? labelValid?.classList.remove(CLASS_LABEL_VALID)
			: labelValid?.classList.add(CLASS_LABEL_VALID)
	} else {
		let pass = document.querySelector(
			'input[data-valid=pass]'
		) as HTMLInputElement
		const valideted: boolean = Validation[valid](inp.value, pass.value)
		valideted
			? labelValid?.classList.remove(CLASS_LABEL_VALID)
			: labelValid?.classList.add(CLASS_LABEL_VALID)
	}
}

export function click(e: Event): void {
	const item = e.target
	const closestItem: HTMLElement = item.closest('button')

	if (closestItem?.classList?.contains('button_logout')) {
		const logout = confirm('Вы уверены?')
		if (logout) {
			AuthController.logout()
		}
	}
}
