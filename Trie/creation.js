
class Node {
    constructor(value = '') {
        this.children = new Map();
        this.value = value;
        this.endOfWord = false;
    }
}
// view rawjs-trie-node-constructor hosted with ❤ by GitHub

class Trie{
    //Initialize your data structure hear
    constructor(){
        this.root = new Node();

    }

    
    insert(word) {
        if (!word) return false;

        let currNode = this.root;

        for (const letter of word) {
            if (!currNode.children.has(letter)) {
                currNode.children.set(letter,new Node(letter));
            }
            currNode = currNode.children.get(letter);
        }

        currNode.endOfWord = true;
        return currNode;
    }

    
    hasWord(word, start = this.root) {
        if (!word) return false;

        let currNode = start;
        for (const letter of word) {
            if (!currNode.children.has(letter)) return false;

            currNode = currNode.children.get(letter);
        }

        return currNode.endOfWord;
    }
}