const props = {
  name: "Abby",
  chat: "the last of us. Part II",
  getChat() {
    this._privateMethod()
  },
  _privateMethod() {
    console.log(this._privateProp)
  },
  __privateMethodToo() {},
  _privateProp: "Нельзя получить просто так",
}

const proxyProps = new Proxy(props, {
  get(target, prop) {
    if (prop.indexOf("_") === 0) {
      throw new Error("Нет прав")
    }

    const value = target[prop]
    return typeof value === "function" ? value.bind(target) : value
  },
  set(target, prop, value) {
    if (prop.indexOf("_") === 0) {
      throw new Error("Нет прав")
    }

    target[prop] = value
    return true
  },
  deleteProperty(target, prop) {
    if (prop.indexOf("_") === 0) {
      throw new Error("Нет прав")
    }
    delete target[prop]
  },
})

proxyProps.getChat()
delete proxyProps.chat
console.log(proxyProps.chat)

proxyProps.newProp = 2
console.log(proxyProps.newProp)

try {
  proxyProps._newPrivateProp = "Super game"
} catch (error) {
  console.log(error)
}

try {
  delete proxyProps._privateProp
} catch (error) {
  console.log(error) // Error: Нет прав
}
