import Block from "../../modules/block.js"
import { compile } from "../../utils/templator.js"
import { template } from "./Form.tmp.js"

export default class Form extends Block {
  constructor(props) {
    super("form", {
      ...props,
    })
  }

  render(): string {
    return compile(template, this.props.context)
  }
}
