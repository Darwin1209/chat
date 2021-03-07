import Profile from './Profile.js'
import { renderDom } from '../../utils/renderDom.js'

const main: Profile = new Profile()

renderDom('#root', main)
