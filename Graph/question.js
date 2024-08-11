// // // const { appendFile } = require("fs")
// // // [2,0][1,1][0,2]
// // // [0, 0], [1,1], [2,2]
// // function findMegicalRectangle() {
// //     // let points = [[10, 0], [0, 10]]
// //     // let points= [[2, 0], [1, 1], [0, 2]]
// //     // let points = [[0, 0], [1, 1], [2, 2]]
// //     let points = [[1, 2], [2, 3], [3, 1], [1, 3], [3, 2], [2, 1]]
// //     let n = points.length
// //     let count = 0
// //     // points.sort((a,b)=>a[0]-b[0]||a[1]-b[1])
// //     let map = new Map()
// //     for (let i = 0; i < n; i++) { // x, y, i | x, y, i
// //         let [x, y] = points[i] // 10, 0, 1 | 0, 10, 2
// //         if (map.has(y)) {
// //             let [x1, idx] = map.get(y)
// //             if (x === x1 && idx + 1 === i) {
// //                 count += 3
// //             }
// //             else {
// //                 count += 2
// //             }
// //         }
// //         else {
// //             map.set(x, [y, i])
// //         }
// //         console.log(x, y, map, count, i)

// //         // return count
// //     }
// //     /* for (let i = 0; i < n; i++) {
// //          let [x1, y1] = points[i]
// //          for (let j = 0; j < n; j++) {
// //              let [x2, y2] = points[j]
// //              if (x1 !== x2 && y1 !== y2) {
// //                  const pair = `${y1}, ${y2}`
// //                  if (map.has(pair)) {
// //                      count += map.get(pair)
// //                  }
// //                  if (!map.has(pair)) {
// //                      map.set(pair, 0)
// //                  }
// //                  map.set((pair, map.get(pair) + 1))
// //              }
// //          }
// //      }*/
// //     return count

// // }

// // console.log(findMegicalRectangle())


// function isWinningHand(tiles) {
//     if (tiles.length !== 14) return false;

//     function canFormWinningHand(tiles) {
//         if (tiles.length === 0) return true;
        
//         // Check for a triplet
//         for (let i = 0; i < tiles.length - 2; i++) {
//             if (tiles[i] === tiles[i + 1] && tiles[i] === tiles[i + 2]) {
//                 const remainingTiles = tiles.slice(0, i).concat(tiles.slice(i + 3));
//                 if (canFormWinningHand(remainingTiles)) return true;
//             }
//         }

//         // Check for a sequence
//         for (let i = 0; i < tiles.length - 2; i++) {
//             const first = tiles[i];
//             const secondIndex = tiles.indexOf(first + 1, i + 1);
//             const thirdIndex = tiles.indexOf(first + 2, i + 1);
//             if (secondIndex !== -1 && thirdIndex !== -1) {
//                 const remainingTiles = tiles.slice(0, i).concat(tiles.slice(i + 1, secondIndex)).concat(tiles.slice(secondIndex + 1, thirdIndex)).concat(tiles.slice(thirdIndex + 1));
//                 if (canFormWinningHand(remainingTiles)) return true;
//             }
//         }

//         return false;
//     }

//     // Sort the tiles to make it easier to check for sets and sequences
//     tiles.sort((a, b) => a - b);

//     // Try to find a pair
//     for (let i = 0; i < tiles.length - 1; i++) {
//         if (tiles[i] === tiles[i + 1]) {
//             const remainingTiles = tiles.slice(0, i).concat(tiles.slice(i + 2));
//             if (canFormWinningHand(remainingTiles)) return true;
//         }
//     }

//     return false;
// }

// // Example usage:
// const hand1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 6, 7, 8];
// const hand2 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 9, 9];
// console.log(isWinningHand(hand1)); // true
// console.log(isWinningHand(hand2)); // true


