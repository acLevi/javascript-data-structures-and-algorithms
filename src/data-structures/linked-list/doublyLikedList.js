import { defaultEquals } from "../../util.js";
import LinkedList from "./linkedList.js";
import { Node } from "../models/linked-list-model.js";

class DoublyNode extends Node {
  // {1}
  constructor(element, next, prev) {
    super(element, next); // {2}
    this.prev = prev; // {3} NOVO
  }
}

export class DoublyLinkedList extends LinkedList {
  // {4}
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined; // {6} NOVO
  }

  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          // {1} NOVO
          this.head = node;
          this.tail = node;
        } else {
          node.next = this.head; // {2}
          current.prev = node; // {3} NOVO
          this.head = node; // {4}
        }
      } else if (index === this.count) {
        // último item - NOVO
        current = this.tail; // {5}
        current.next = node; // {6}
        node.prev = current; // {7}
        this.tail = node; // {8}
      } else {
        const previous = this.getElementAt(index - 1); // {9}
        current = previous.next; // {10}
        node.next = previous; // {11}
        previous.next = node; // {12}
        current.prev = node; // {13} NOVO
        node.prev = previous; // {14} NOVO
      }
      this.count++;
      return true;
    }
    return false;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head;
      if (index === 0) {
        this.head = current.next; // {1}
        // se houver apenas um item, atualizamos tail também - NOVO
        if (this.count === 1) {
          // {2}
          this.tail = undefined;
        } else {
          this.head.prev = undefined; // {3}
        }
      } else if (index === this.count - 1) {
        // último item - NOVO
        current = this.tail; // {4}
        this.tail = current.prev; // {5}
        this.tail.next = undefined; // {6}
      } else {
        current = this.getElementAt(index);
        const previous = current.prev; // {8}
        // faz a ligação de previous com o next de current - pula esse elemento para removê-lo
        previous.next = current.next; // {9}
        current.next.prev = previous; // {10} NOVO
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
}