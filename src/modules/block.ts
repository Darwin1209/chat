import { EventBus } from "../utils/EventBus.js"
// import { v4 as makeUUID } from "uuid"
// Нельзя создавать экземпляр данного класса

interface Props {
  events: object
  components: Block[]
  className: string
  items: object[]
  context: object
}

class Block {
  props: Props
  eventBus: EventBus
  _events: object

  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU: "flow:component-did-update",
    FLOW_CDR: "flow:component-did-render",
  }

  _element = null
  _meta = null
  _id = null

  /** JSDoc
   * @param {string} tagName
   * @param {Object} props
   *
   * @returns {void}
   */
  constructor(tagName = "div", props = {}) {
    // const eventBus = new EventBus()

    this._meta = {
      tagName,
      props,
    }

    this.props = this._makePropsProxy({ ...props })
    this.eventBus = new EventBus()

    // this.eventBus = () => eventBus

    this._registerEvents(this.eventBus)
    this.eventBus.emit(Block.EVENTS.INIT)
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDR, this._componentDidRender.bind(this))
  }

  _createResources() {
    const { tagName } = this._meta
    this._element = this._createDocumentElement(tagName)
  }

  init() {
    this._createResources()
    this.eventBus.emit(Block.EVENTS.FLOW_CDM)
  }

  _componentDidRender(): void {
    this.componentDidRender()
  }

  componentDidRender(): void {}

  _componentDidMount() {
    this.componentDidMount()
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
  }

  componentDidMount() {}

  _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps)

    if (JSON.stringify(oldProps) !== JSON.stringify(newProps) || response) {
      this.eventBus.emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  componentDidUpdate(oldProps, newProps) {
    return true
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element() {
    return this._element
  }

  _render() {
    const block = this.render()

    this._removeEvents()

    this._element.insertAdjacentHTML("afterbegin", block)

    this._addEvents()

    this.eventBus.emit(Block.EVENTS.FLOW_CDR)
  }

  // Переопределяется пользователем. Необходимо вернуть разметку
  render(): void {}

  getContent() {
    return this.element
  }

  _removeEvents() {
    const { events = {} } = this.props

    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName])
    })
  }

  _addEvents() {
    const { events = {} } = this.props
    this._events = events

    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(
        eventName,
        events[eventName],
        eventName === "focus" || eventName === "blur"
      )
    })
  }

  _makePropsProxy(props) {
    return new Proxy(props, {
      get(target: object, prop: string) {
        if (prop.indexOf("_") === 0) {
          throw new Error("Отказано в доступе")
        }
        const value = target[prop]
        return typeof value === "function" ? value.bind(target) : value
      },
      set: (target, prop, value) => {
        const oldProps = { ...target }
        target[prop] = value
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, target)
        return true
      },
      deleteProperty() {
        throw new Error("Отказано в доступе")
      },
    })
  }

  _createDocumentElement(tagName) {
    // Можно сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tagName)
    element.className = this.props.className
    return element
  }

  show() {
    this.getContent().style.display = "block"
  }

  hide() {
    this.getContent().style.display = "none"
  }
}

export default Block
