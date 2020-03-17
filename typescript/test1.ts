// enum Days {
//   Money,
//   Tuesday,
//   Wednesday,
//   Thursday
// }

// namespace AllDay {
//   export function getDay(day: Days): boolean {
//     switch (day) {
//       case 0:
//       case 1:
//       case 2: 
//         return true
//       default:
//         return false
//     }
//   }
// }


// console.log(AllDay.getDay(Days.Money))


function mixin<T extends Object, U>(first: T, second: U): T & U {
  const result = <T & U>{}
  for(let i in first) {
    (<T>result)[i] = first[i]
  }
  for(let i in second) {
    if(!result.hasOwnProperty(i)) {
      (<U>result)[i] = second[i]
    }
  }
  return result
}

const x = mixin({ a: 12 }, { b: 12 })

console.log(x)