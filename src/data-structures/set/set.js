class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  add(element) {
    if (!this.has(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }

  clear() {
    this.items = {}; // {2}
  }

  size() {
    return Object.keys(this.items).length; // {1}
  }

  sizeLegacy() {
    let count = 0;
    for (let key in this.items) {
      if (this.items.hasOwnProperty(key)) { // {3}
        count++;
      }
    }
    return count;
  }

  values() {
    return Object.values(this.items);
  }

  valuesLegacy() {
    let values = [];
    for (let key in this.items) { // {1}
      if (this.items.hasOwnProperty(key)) { // {2}
        values.push(key);
      }
    }
    return values;
  };

  union(otherSet) {
    const unionSet = new Set(); //{1}
    this.values().forEach(value => unionSet.add(value)); // {2}
    otherSet.values().forEach(value => unionSet.add(value)); // {3}
    return unionSet;
  }

  intersection(otherSet) {
    const intersectionSet = new Set(); // {1}
    const values = this.values(); // {2}
    const otherValues = otherSet.values(); // {3}
    let biggerSet = values; // {4}
    let smallerSet = otherValues; // {5}
    if (otherValues.length - values.length()) { // {6}
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach(value => { // {7}
      if (biggerSet.has(value)) {
        intersectionSet.add(value)
      }
    });
    return intersectionSet;
  }

  difference(otherSet) {
    const differenceSet = new Set(); // {1}
    this.values().forEach(value => { // {2}
      if(!otherSet.has(value)) { // {3}
        differenceSet.add(value); // {4}
      }
    });
    return differenceSet;
  }

  isSubsetOf(otherSet) {
    if (this.size > otherSet.size()) { // {1}
      return false;
    }
    let isSubset = true; // {2}
    this.values().every(value => { // {3}
      if (!otherSet.has(value)) { // {4}
        isSubset = false; // {5}
        return false;
      }
      return true; // {6}
    });
    return isSubset; // {7}
  }
}