function wordCountEngine(document) {
    // let arr = s.toLowerCase().split(" ")
    let wordsArray = document.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '').split(/\s+/);
    let map = new Map()
    for(let i=0; i<wordsArray.length; i++){
        if(map.has(wordsArray[i])){
            map.set(wordsArray[i], map.get(wordsArray[i])+1)
        }
        else{
            map.set(wordsArray[i], 1)
        }
    }
    let ans = []
    for(let n of map){
        ans.push(n)
    }
    return ans.sort((a,b)=>b[1]-a[1])

}
let document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
let document1 = 'To be, or not to be, that is the question:'


// output: [["practice", "3"], ["perfect", "2"],
// ["makes", "1"], ["youll", "1"], ["only", "1"],
// ["get", "1"], ["by", "1"], ["just", "1"]]
console.log(wordCountEngine(document1))