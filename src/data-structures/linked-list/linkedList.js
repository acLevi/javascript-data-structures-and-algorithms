import { defaultEquals } from "../../util.js";
import { Node } from "../models/linked-list-model.js";

export default class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);
    let current;
    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
    this.count++;
  }

  removeAt(index) {
    // verifica valores fora do intervalo
    if (index >= 0 && index < this.count) {
      // {1}
      let current = this.head; // {2}
      // remove o primeiro item
      if (index === 0) {
        // {3}
        this.head = current.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--; // {9}
      return current.element;
    }
    return undefined; // {10}
  }

  getElementAt(index) {
    if (index >= 0 && index < this.count) {
      // {1}
      let current = this.head; // {2}
      for (let i = 0; i < index && node != null; i++) {
        // {3}
        current = current.next;
      }
      return current; // {4}
    }
    return undefined; // {5}
  }

  insert(element, index) {
    if (index >= 0 && index < this.count) { // {1}
      const node = new Node(element);
      if (index === 0) {
        const current = this.head;
        node.next = current; // {2}
        this.head = node;
      } else {
        const previous = this.getElementAt(index - 1); // {3}
        const current = this.head; // {4}
        node.next = current; // {5}
        previous.next = node; // {6}
      }
      this.count++; // atualiza o tamanho da lista
      return true;
    }
    return false; {7}
  }

  indexOf(element) {
    let current = this.head; // {1}
    for (let i = 0; i < this.count && current != null; i++) { // {2}
      if (this.equalsFn(element, current)) { // {3}
        return i; // {4}
      }
      current = current.next; // {5}
    }
    return -1; // {6}
  }

  remove(element) {
    const index = this.indexOf(element);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  getHead() {
    return this.head;
  }

  toString() {
    if (this.isEmpty()) { // {1}
      return '';
    }
    let objString = `${this.head.element}`; // {2}
    let current = this.head.next;
    for (let i = 1; i < this.size() && current != null; i++) { // {4}
      objString = `${objString}, ${current.element}`;
      current = current.next;
    }
    return objString; // {5}
  }
}
