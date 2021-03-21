class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  //* Кладёт элемент на стек.
  //* Возвращает новый размер стека.
  push(value) {
    const node = { value, next: null, prev: null };
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.resize(1);
      return this.size;
    }

    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.resize(1);
    return this.size;
  }

  //* Убирает элемент со стека.
  //* Если стек пустой, кидает ошибку.
  //* Возвращает удалённый элемент.
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const popedItem = this.tail;
    this.tail = this.tail.prev;
    if (this.tail === null) {
      this.head = null;
    } else {
      this.tail.next = null;
    }
    this.resize(-1);
    return popedItem;
  }

  //* Возвращает верхний элемент стека без его удаления.
  peek() {
    return this.tail;
  }

  //* Если стек пуст, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0 ? true : false;
  }

  resize(oper) {
    this.size = this.size + oper;
  }
}