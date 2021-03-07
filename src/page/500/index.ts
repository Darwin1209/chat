import E500 from './500.js'
import { renderDom } from '../../utils/renderDom.js'

const main: E500 = new E500()

renderDom('#root', main)
