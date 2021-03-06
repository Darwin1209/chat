import Block from "../../modules/block.js"
// Ваш реализованный шаблонизатор
import { compile } from "../../utils/templator.js"
import { template } from "./template.js"

export default class Button extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("button", props)
  }

  render() {
    // В данном случае render возвращает строкой разметку из шаблонизатора
    return compile(template, this.props)
  }
}
