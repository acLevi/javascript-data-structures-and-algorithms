import { defaultEquals } from "../util.js";
import LinkedList from "./linkedList.js";
import { Node } from "../../models/linked-list-model.js";

class CircularLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
  }

  insert(element) {
    if (index >= 0 && index <= this.count) {
      const node = new Node(element);
      let current = this.head;
      if (index === 0) {
        if (this.head == null) {
          this.head = node; // {1}
          node.next = this.head; // {2} NOVO
        } else {
          node.next = current; // {3}
          current = this.getElementAt(this.size()); // {4}
          this.head = node; // {5}
          current.next = this.head; // {6} NOVO
        }
      } else {
        // sem alterações neste cenário
        const previous = this.getElementAt(index - 1);
        node.next = previous.next;
        previous.next = node;
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
        if (this.size() === 1) {
          this.head = undefined;
        } else {
          const removed = this.head; // {1}
          current = this.getElementAt(this.size()); // {2} NOVO
          this.head = this.head.next;
          current.next = this.head;
          current = removed;
        }
      } else {
        // não há necessidade de atualizar o último elemento da lista circular
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element; // {6}
    }
    return undefined;
  }
}
