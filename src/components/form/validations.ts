export enum TYPES_VALIDATION {
	TEXT = 'text',
	PASSWORD = 'pass',
	COPY_PASS = 'passTwo',
	PHONE = 'phone',
	MAIL = 'mail',
}

interface ValidationObject {
  regularExp: {
    login: RegExp;
    text: RegExp;
    pass: RegExp;
    phone: RegExp;
    mail: RegExp;
  }
  text(string: string): boolean;
  pass(string: string): boolean;
  passTwo(string: string, stringCopy: string): boolean;
  phone(string: string): boolean;
  mail(string: string): boolean;
}

export const Validation: ValidationObject = {
  regularExp: {
    login: /^[a-z0-9_-]{3,16}$/,
    text: /^[а-яА-Я]{3,16}$/,
    pass: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/,
    phone: /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
    mail: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
  },

  text(string: string): boolean {
    return true;
  },
  pass(string: string): boolean {
    return true;
  },
  passTwo(string: string, stringCopy:string): boolean {
    return true;
  },
  phone(string: string):boolean {
    return true;
  },
  mail(string: string):boolean {
    return true;
  }
}