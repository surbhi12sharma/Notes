// find the minimum number of operations required to make a string "similar".
// A String is similar if the number of vowels equals the number of consonants.

// A character can be increased or decreased only once at a time.
// 'a' cannot be decremented and 'z' cannot be incremented further.
// abcd, bigbangt

function minOperation(word){
    let n = word.length
    let set = new Set(["a","e","i","o","u"])
    // let distance = [1, 5, 9, 15, 21]
    findminDistance(word, n, 0, 0)
}

function findminDistance(word, n, idx, mini){
    
}

minOperation('abcd')