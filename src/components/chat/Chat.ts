import Block from "../../modules/block.js"

import { compile } from "../../utils/templator.js"
import { template } from "./Chat.tmp.js"

export default class Aside extends Block {
  constructor(props) {
    super("main", {
      ...props,
      className: "main-wrapper",
    })
  }

  render() {
    return compile(template, {
      list: [
        {
          text: `Привет! Смотри, тут всплыл интересный кусок лунной космической
          истории — НАСА в какой-то момент попросила Хассельблад
          адаптировать модель SWC для полетов на Луну. Сейчас мы все
          знаем что астронавты летали с моделью 500 EL — и к слову
          говоря, все тушки этих камер все еще находятся на поверхности
          Луны, так как астронавты с собой забрали только кассеты с
          пленкой.
          \n
          Хассельблад в итоге адаптировал SWC для космоса, но что-то
          пошло не так и на ракету они так никогда и не попали. Всего их
          было произведено 25 штук, одну из них недавно продали на
          аукционе за 45000 евро.`,
          date: "11:55",
          me: true,
        },
        {
          text:
            "Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей. Текст генерируется абзацами случайным образом от двух до десяти предложений в абзаце, что позволяет сделать текст более привлекательным и живым для визуально-слухового восприятия.",
          date: "12:00",
        },
        {
          foto: true,
          date: "12:02",
          src: "./img/camera.jpg",
        },
        {
          text: "Круто",
          date: "12:05",
          me: true,
        },
        {},
      ],
    })
  }
}
