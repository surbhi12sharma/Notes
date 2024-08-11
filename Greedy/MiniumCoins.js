function MinCoins(){
    let val = 101, coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000]
    coins.sort((a,b)=>b-a)
    const n = coins.length
    let count = 0
    for(let i=0; i<n; i++){
        if(coins[i]<=val){
            val -= coins[i]
            i--
            count++
        }
    }
    console.log(count)
}

MinCoins()