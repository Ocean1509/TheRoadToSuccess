// function repeat(func, times, wait) {
//   return function(words) {
//     console.log(times, wait)
//     for(let i = 0; i < times; i++) {
//       setTimeout(() => {
//         console.log(this)
//         func.call(this, words)
//       }, i * wait);
//     }
//   }
// }
// const repeatFunc = repeat(console.log, 4, 3000)
// repeatFunc('hello')


// var number = 10;
// function fn() {
//   console.log(this)
//   console.log(this.number)
// }

// var obj = {
//   number: 2,
//   show: function(fn) {
//     this.number = 3;
//     fn()
//     arguments[0]()
//   }
// }

// obj.show(fn)

// 10



// 301 302 304 403
// 301 永久重定向
// 302 临时重定向
// 304 命中协商缓存，浏览器从缓存中获取资源，而不通过请求
// 403 认证不通过，没有权限访问资源


var x = 1,y = 0, z = 0;
function add(x) {
  return (x = x + 1)
}

y = add(x)
function add(b) {
  return (x = b + 3)
}

z = add(x)

// x=1, y = 4, z=4


// 5秒钟内只能发一条短信，15秒内发2条，30秒内3条

function sendMsg(){
  let long = 30 * 1000;
  let middle = 15 * 1000;
  let short = 5 * 1000;
  let times = 0;
  let startTime;
  return function(send) {
    let start = new Date().getTime();
    if(!startTime) startTime = start;
    if(start - startTime < short && times >= 1) return
    if(start-startTime < middle && times >= 2) return
    if(start - startTime < long && times >= 3) return
    send.call(this)
    times++
  }
}     

var fn = sendMsg();
function send() {
  console.log('send')
}

setInterval(function() { fn.call(this, send)}, 2)

// x y

// 抽奖算法
// 一等奖 2， 
// 二等奖 3
// 三等奖 4

// 一万分之1
// 一千分之1
// 一百分之1

//
