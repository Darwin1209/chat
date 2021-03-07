import E404 from './404.js'
import { renderDom } from '../../utils/renderDom.js'

const main: E404 = new E404()

renderDom('#root', main)
