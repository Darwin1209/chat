import { Props } from '../modules/block'

export const compile = (template: string, props: Props | undefined) => {
	//@ts-ignore
	const tmp = Handlebars.compile(template)
	return tmp(props)
}
