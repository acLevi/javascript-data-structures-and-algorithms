export class Node {
    constructor(key) {
        this.key = key; // {1} valor do nó
        this.lest = null; // referência ao nó que é o filho à esquerda
        this.right = null; // referência ao nó que é o filho à direita
    }
}