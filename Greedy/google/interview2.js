class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfPrefix = "*";
        this.index = -1;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(prefix, index) {
        let node = this.root;
        for (let char of prefix) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfPrefix = true;
        node.index = index;
    }

    search(query) {
        let node = this.root;
        let longestPrefixIndex = -1;

        for (let char of query) {
            if (node.children[char]) {
                node = node.children[char];
                if (node.isEndOfPrefix) {
                    longestPrefixIndex = node.index;
                }
            } else {
                break;
            }
        }

        return longestPrefixIndex;
    }
}

function findLongestMatchingPrefix(ipPrefixes, queries) {
    const trie = new Trie();

    ipPrefixes.forEach((prefix, index) => {
        trie.insert(prefix, index + 1);  // Prefix indices are 1-based
    });

    return queries.map(query => trie.search(query));
}

// Example usage:
const ipPrefixes = ["192.168.*", "192.168.2.*", "192.168.2.1", "*"];
const queries = ["192.168.2.18", "0.0.0.0", "192.168.7.1", "192.168.2.1"];

const results = findLongestMatchingPrefix(ipPrefixes, queries);

results.forEach((result, i) => {
    console.log(`Query ${queries[i]} matches F${result}`);
});
