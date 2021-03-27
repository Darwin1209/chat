export enum TYPES_VALIDATION {
	TEXT = 'text',
	PASSWORD = 'pass',
	COPY_PASS = 'passTwo',
	PHONE = 'phone',
	MAIL = 'mail',
}

// interface ValidationObject {
//   regularExp: {
//     login: RegExp;
//     text: RegExp;
//     pass: RegExp;
//     phone: RegExp;
//     mail: RegExp;
//   }
//   text(string: string): boolean;
//   pass(string: string): boolean;
//   passTwo(string: string, stringCopy: string): boolean;
//   phone(string: string): boolean;
//   mail(string: string): boolean;
//   login(string: string): boolean;
// }

export const Validation: { [key: string]: any } = {
	regularExp: {
		login: /^[a-zA-Z0-9_-]{3,16}$/,
		text: /^[а-яА-Яa-zA-Z0-9]{3,16}$/,
		pass: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/,
		phone: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
		mail: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
	},

	login(string: string): boolean {
		return this.regularExp.login.test(string)
	},
	text(string: string): boolean {
		return this.regularExp.text.test(string)
	},
	pass(string: string): boolean {
		return this.regularExp.pass.test(string)
	},
	passTwo(string: string, stringCopy: string): boolean {
		return string === stringCopy
	},
	phone(string: string): boolean {
		return this.regularExp.phone.test(string)
	},
	mail(string: string): boolean {
		return this.regularExp.mail.test(string)
	},
	all(string: string): boolean {
		return true
	},
}
