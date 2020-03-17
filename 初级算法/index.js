/**
 * @param {number[]} nums
 * @return {number}
 */
// var removeDuplicates = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === nums[i - 1]) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   return nums.length
// };

// var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// console.log(removeDuplicates(nums))

// var prices = [7, 1, 5, 3, 6, 4];
// var maxProfit = function (prices) {

// };

// console.log(maxProfit(prices))

// var nums = [1, 2, 3, 4, 5, 6, 7];
// var k = 3
// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     let temp = nums[nums.length - 1]
//     for (let j = 0; j < nums.length; j++) {
//       t = nums[j]
//       nums[j] = temp;
//       temp = t;
//     }
//   }
//   console.log(nums)
// };

// var rotate = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop())
//   }
//   console.log(nums)
// }
// rotate(nums, k)
// temp = 7
// [7, 2, 3, 4, 5, 6, 7]
// temp = 1
// [7, 1, 3, 4, 5, 6, 7]
// temp = 2
// [7, 1, 2, 4, 5, 6, 7]
// temp = 3
// [7, 1, 2, 3, 5, 6, 7]
// temp = 4
// [7, 1, 2, 3, 4, 6, 7]
// temp = 5
// [7, 1, 2, 3, 4, 5, 7]
// temp = 6
// [7, 1, 2, 3, 4, 5, 6]



// var nums1 = [1, 2, 2, 1],
//   nums2 = [2, 2];


// var intersect = function (nums1, nums2) {
//   if (nums1.length < nums2.length) {
//     let temp = nums1;
//     nums1 = nums2;
//     nums2 = temp
//   }
//   let arr = []
//   for (let i = 0; i < nums1.length; i++) {
//     let idx = nums2.indexOf(nums1[i])
//     if(idx !== -1) {
//       arr.push(nums1[i])
//       nums2.splice(idx, 1)
//     }
//   }
//   return arr
// };

// console.log(intersect(nums1, nums2))


// var nums = [0, 1, 0, 12]

// var moveZeroes = function (nums) {
//   let len = nums.length;
//   let i = 0
//   while(len) {
//     if(nums[i] === 0) {
//       nums.push(nums.splice(i, 1)[0])
//       i--
//     }
//     i++
//     len--
//   }
//   return nums
// };

// console.log(moveZeroes(nums))
var board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

var isValidSudoku = function (board) {

  let columBoard = []
  for (let i = 0; i < board.length; i++) {
    columBoard[i] = []
    for (let j = 0; j < board.length; j++) {
      console.log(j, i)
      console.log(board[j])
      columBoard[i][j] = board[j][i]
    }
  }
  console.log(columBoard)
};

isValidSudoku(board)