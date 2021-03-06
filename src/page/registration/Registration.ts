import Block from "../../modules/block.js"

import Form from "../../components/form/index.js"

import { renderChildren } from "../../utils/renderChildren.js"

export default class Registration extends Block {
  constructor() {
    super("main", {
      className: "main",
      components: [
        new Form({
          className: "form form-reg form-reg_registr",
          context: {
            title: "Регистрация",
            submit: "Зарегистрироваться",
            link: "auth.html",
            linkLabel: "Войти",
            fields: [
              { type: "text", name: "email", label: "Почта" },
              { type: "text", name: "login", label: "Логин" },
              { type: "text", name: "first_name", label: "Имя" },
              { type: "text", name: "second_name", label: "Фамилия" },
              { type: "number", name: "phone", label: "Телефон" },
              {
                type: "password",
                name: "password",
                label: "Пароль",
                pass: true,
              },
              {
                type: "password",
                name: "password_two",
                label: "Пароль (ещё раз)",
                pass: true,
              },
            ],
          },
        }),
      ],
    })
  }

  render() {
    return ""
  }

  componentDidRender(): void {
    renderChildren(this.element, this.props.components)
  }
}

// result = res2.map(el => ({
//   type: 'text',
//   name: el.children[0].name,
//   label: el.children[1].textContent
// }))
