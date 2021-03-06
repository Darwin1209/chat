import Block from "../../modules/block.js"

import { compile } from "../../utils/templator.js"
import { template } from "./Aside.tmp.js"

export default class Aside extends Block {
  constructor(props) {
    super("aside", {
      ...props,
      className: "chats",
    })
  }

  render() {
    console.log(this.props.items)
    return compile(template, { list: this.props.items })
  }
}
