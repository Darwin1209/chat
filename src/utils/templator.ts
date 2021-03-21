import { Props } from '../modules/block'

export const compile = (template: string, props: Props | undefined) => {
	console.log(props)
	const tmp = Handlebars.compile(template)
	return tmp(props)
}
