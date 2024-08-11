function subSeq(input){
    const n = input.length
    let str ="", strLength="", max = 0, left=0, right=0
    const map  = new Map()
    for(let i=0; i<n; i++){
        if(map.has(input[i])){
            if(max<strLength.length){
                max = strLength.length
                str = strLength//abc
                let j = 0
                while(j<s)
                // j = Math.max(map.get(input[i]))
                
                // strLength=""
                // max = 3, str= "abc", i=

                // strLength = ""
            }
        }
        else{
            strLength += input[i]
            map.set(input[i], i)
        }
    }

    while()

    //abcad



    return str
}
console.log(subSeq("abcabcbb"))