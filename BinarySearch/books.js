console.log(book())
function book() {
    const arr = [25, 46, 28, 49, 24]        //[12, 34, 67, 90]
    const student = 4 //2
    const n = 5 //4
    if (n < student) {
        return -1
    }
    let low = Math.max(...arr)
    let high = 0
    for (let i = 0; i < n; i++) {
        high += arr[i]
    }
    while (low <= high) {
        let pages = Math.floor((low + high) / 2)
        let cntStudent = findNumberStudent(arr, pages)
        // console.log(cntStudent)
        // if(cntStudent === student){
        // return pages
        // }
        if (cntStudent > student) {
            low = pages + 1
        }
        else {
            high = pages - 1
        }
    }
    return low
    // for (let pages = low; pages <= high; pages++){
    // let cntStudent = findNumberStudent(arr, pages) 
    // if(cntStudent===student){
    // return pages
    // }
    // }
}

function findNumberStudent(arr, pages) {
    let student = 1, pageStudent = 0, n = arr.length
    for (let i = 0; i < n; i++) {
        if (pageStudent + arr[i] <= pages) {
            pageStudent += arr[i]
        }
        else {
            student += 1
            pageStudent = arr[i]
        }
    }
    return student
}