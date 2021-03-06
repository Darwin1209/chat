import Block from "../modules/block"

export const renderChildren = (root: HTMLElement, childrens: Block[]): void => {
  childrens.forEach((children) => {
    root.appendChild(children.getContent())
  })
}
