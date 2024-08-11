// main()
// function main() {
//     const l = 4, r = 50
//     let count = 0
//     for (let i = l + 1; i < r; i++) {
//         if (hasExactlyThreeFactorsBrute(i) && isPrime(i)) {
//             console.log(i)
//             count++
//         }
//     }
//     console.log(count)
// }

// function hasExactlyThreeFactorsBrute(n) {
//     let sq = parseInt(Math.sqrt(n));
 
//     // Check whether number is perfect
//     // square or not
//     if (sq * sq != n)
//         return false;
 
//     // If number is perfect square, check
//     // whether square root is prime or
//     // not
//     return isPrime(sq) ? true : false;
// }

// function isPrime(n)
// {
     
//     // Corner cases
//     if (n <= 1)
//         return false;
//     if (n <= 3)
//         return true;
 
//     // This is checked so that we can skip
//     // middle five numbers in below loop
//     if (n % 2 == 0 || n % 3 == 0)
//         return false;
 
//     for(let i = 5; i * i <= n; i = i + 6)
//         if (n % i == 0 || n % (i + 2) == 0)
//             return false;
 
//     return true;
// }

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function countNearPrimes(L, R) {
    let count = 0;
    let lowerBound = Math.floor(Math.sqrt(L)) + 1;
    let upperBound = Math.floor(Math.sqrt(R));

    for (let i = lowerBound; i <= upperBound; i++) {
        if (isPrime(i)) {
            let nearPrime = i * i;
            if (L < nearPrime && nearPrime < R) {
                count += 1;
            }
        }
    }
    return count;
}

// Example usage:
let L = 4;
let R = 50;
console.log(countNearPrimes(L, R)); // Output the number of near primes between L and R
