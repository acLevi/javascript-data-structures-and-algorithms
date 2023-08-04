import { defaultEquals } from "../../util.js";
import LinkedList from "./linkedList.js";

class SortedLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
    super(equalsFn);
    this.compareFn = compareFn;
  }
  insert(element, index = 0) { // {1}
    if (this.isEmpty()) {
      return super.insert(element, 0); // {2}
    }
    const pos = this.getIndexNextSortedElement(element); // {3}
    return super.insert(element, pos); // {4}
  }

  getIndexNextSortedElement(element) {
    let current = this.head;
    let i = 0;
    for (; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element); // {5}
      if (comp == Compare.LESS_THAN) { // {6}
        return i;
      }
      current = current.next;
    }
    return i; // {7}
  }
}
