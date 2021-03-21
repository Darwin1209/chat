class Queue {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  // Ставит элемент в очередь.
  // Возвращает новый размер очереди.
  enqueue(value) {
    const node = { value, next: null, prev: null };
    if (this.isEmpty()) {
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

  // Убирает элемент из очереди.
  // Если очередь пустая, кидает ошибку.
  // Возвращает удалённый элемент.
  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    const popedItem = this.head;
    this.head = this.head.next;
    if (this.head === null) {
      this.tail = null;
    } else {
      this.head.prev = null;
    }
    this.resize(-1);
    return popedItem;
  }

  // Возвращает элемент в начале очереди.
  peek() {
    return this.head;
  }

  // Если очередь пустая, возвращает true. В противном случае –– false.
  isEmpty() {
    return this.size === 0 ? true : false;
  }

  resize(oper) {
    this.size = this.size + oper;
  }
}