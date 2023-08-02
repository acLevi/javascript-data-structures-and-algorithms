import { defaultToString } from "../util.js";
import { ValuePair } from "../../models/valuePair.js";

export default class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') { // {1}
        return key;
    }
    const tableKey = this.toStrFn(key); // {2}
    let hash = 0; // {3}
    for (let i = 0; i < tableKey.length; i++) {
        hash += tableKey.charCodeAt(i); // {4}
    }
    return hash % 37; // {5}
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && key != undefined) { // {1}
        const position = this.hashCode(key); // {2}
        this.table[position] = new ValuePair(key, value); // {3}
        return true;
    }
    return false;
  }

  get(key) {
    const ValuePair = this.table[this.hashCode(key)]; // {1}
    return ValuePair == null ? undefined : ValuePair.value; // {2}
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];
    if (valuePair != null) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    const keys = Object.keys(this.table);
    let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
    for (let i = 1; i < keys.length; i++) {
      objString = `${objString},\n{${keys[i]} => ${this.table[keys[i]].toString()}}`;
    }
    return objString;
  }
}


const hash = new HashTable();
hash.put('Ygritte', 'ygritte@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Jasmine', 'jasmine@email.com');
hash.put('Jack', 'jack@email.com');
hash.put('Nathan', 'nathan@email.com');
hash.put('Athelstan', 'athelstan@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Aethelwulf', 'aethelwulf@email.com');
hash.put('Sargeras', 'sargeras@email.com');
console.log(hash.toString());