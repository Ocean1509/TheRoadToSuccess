// function flat(arr) {
//   return arr.reduce((current, pre) => {
//     return current.concat(Array.isArray(pre) ? flat(pre) : pre)
//   }, [])
// }
// console.log(flat([1, [3, 4, [5, 6, ['5', '25']]]]))



// function flat1(arr) {
//   return arr.reduce((current, prev) => {
//     return current.concat(Array.isArray(pre) ? flat1(pre) : prev)
//   }, [])
// }
// console.log(flat1([1,4,[3,2]]))


var arr = [1,4,5,6,7,[2,5,5]]

// console.log(arr.flat())


// 数组拍平的方法
// flat
// 手写flat


// 数组去重
// function uniq(arr) {
//   // return Array.from(new Set(arr))
//   return [...new Set(arr)]
// }

function uniq(arr) {
  let result = []
  for(let i in arr) {
    if(!result.includes(arr[i])) {
      result.push(arr[i])
      
    }
  }
  return result
}

console.log(uniq([2,4,52,3,4,2,3,51,1]))