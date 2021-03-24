import Router from '../routers/Router.js'

export function replaceLink(element) {
  element.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault()
      new Router('#root').go(link.pathname)
    })
  })
}