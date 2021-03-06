import Registration from "./Registration.js"
import { renderDom } from "../../utils/renderDom.js"

const main: Registration = new Registration()

renderDom("#root", main)
