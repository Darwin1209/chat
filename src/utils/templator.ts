export const compile = (template: string, props: any) => {
// @ts-ignore
	const tmp = Handlebars.compile(template)
	return tmp(props)
}
