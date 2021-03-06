import Main from './Main.js'
import { renderDom } from '../../utils/renderDom.js'

const main: Main = new Main()

renderDom('#root', main)
