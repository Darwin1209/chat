import Auth from './Auth.js'
import { renderDom } from '../../utils/renderDom.js'

const main: Auth = new Auth()

renderDom('#root', main)
