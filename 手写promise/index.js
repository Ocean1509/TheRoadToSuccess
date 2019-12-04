class Mypromsie {
  constructor(fn) {
    this.status = 'pending';
    this.data = '';
    this.onFullfilledCallback = [];
    this.onFullrejectedCallback = [];
    const resolve = (params) => {
      if (this.status === 'pending') {
        this.data = params
        this.status = 'fullfilled'
        this.onFullfilledCallback.map(e => e(params))
      }
    }
    const reject = (parasm) => {
      if (this.status === 'pending') {
        this.data = params
        this.status = 'fullrejected'
        this.onFullrejectedCallback.map(e => e(params))
      }
    }
    try {
      fn(resolve, reject)
    } catch (error) {
      reject(e)
    }
  }
  then(fn) {
    this.onFullfilledCallback.push(fn)
    return this
  }
}


// var p1 = new Mypromsie((resolve, reject) => {
//   setTimeout(() => {
//     resolve(12)
//   }, 1000);
// })
// p1.then((e) => {
//   console.log(e)
// })

// const promise = new Mypromsie((resolve, reject) => {
//   console.log(1)
//   setTimeout(() => {
//     resolve()
//     console.log(2)
//   }, 1000);
// })
// promise.then(() => {
//   console.log(3)
// })
// console.log(4)


var b = 1

function a() {
  console.log(this)
  return this.b
}
var c = {
  b: '1232'
}
console.log(a())

console.log(a.call(c))

// function myCall(context, ...arg) {

// }
Function.prototype.myCall = function (context, ...args) {
  context.fn = this;
  let result = context.fn(...args)
  delete context;
  return result
}

Function.prototype.myAppply = function (context, args) {
  context.fn = this;
  let result = context.fn(...args)
  delete context;
  return result
}

Function.prototype.myBind = function (context, args) {
  context.fn = this;
  let result = context.fn(...args)
  delete context;
  return result
}
console.log(a())


var c = {
  b: '123',
  fn: a
}
c.fn()
console.log(a.myCall(c))




// promise.all

Promise.all = function (arr) {
  return new Promise((resolve, reject) => {
    if (arr.length < 1) return resolve([])
    for (let i = 0; i < arr.length; i++) {
      let result = []
      let idx = 0
      Promise.resolve(arr).then(data => {
        result[i] = data;
        idx++;
        if (idx === arr.length) {
          resolve(result)
        }
      }).catch(err => {
        reject(err)
      })
    }
  })

}

// 手写generate

function generate(cb) {
  return (function () {
    return {
      next: ,
      done:
    }
  }())
}

function* doi() {
  yield 12
  yield 1412
  return 41414
}

var dos = doi();
console.log(dos.next())
console.log(dos.next())
console.log(dos.next())


// 跨域

function jsonp(url, params, jsonpCallback, success) {
  let script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript'
  script.async = true;
  window[jsonpCallback] = function (data) {
    success && success(data)
  }
  document.body.appendChild(script);
}
// access-control-allow-origin, access-control-allow-methods



// domcontentloaded


//dns预解析
// <link ref="dns-prefetch" href="ddddd">

// documentFragment
// requestAnimationFrame  requestAnimationFrame

// 网络劫持
// http劫持 http明文传输，拦截加广告
// dns

// http请求方法有哪些
// get, post, head
// options, put, delete, patch, trace, patch 是对部分资源进行更新。

// get post 的区别
// get 有浏览器记录
// 安全

// 请求行，请求头，请求体
// 请求头: host,user-agent

// http的首部有哪些
//cache-control, date,upgrade

// 协商缓存

// if-modified-since/last-modified
// if-none-match / etag

// 200 201 202 204 206
// 301 302 303
// 400 请求报文语法错误， 401 403 404 408 409
// 501 

// tcp 和 udp 的区别
// tcp可靠，有丢包重传的机制，并且是有序的，syn排序，但是存在粘包，面向流
// udp效率要高，但是不会重传，无序，也不会粘包，面向消息

// tcp传输的算法，数据发送前会缓存，多个数据短时间会同时发送


// 物理层，链接层，网络层，传输层，会话，表现， 应用层


// https http+ssl
// syn = 1, seq = x, syn = 1, seq = y ,ack = x + 1,


// 左移
a * (2 ^ b)

10 << 1
a / (2 ^ b)


// 不使用加号实现两个数相加
(a ^ b) + (a & b) << 1


// <meta name="viewport" content="width=device-width initial-scale=1">

// name content




// 项目
// 1  回测模块，优化 - 图表选型，页面预渲染，vuex拦截 indexdb
// 2. 风控消息提醒   -  推送
// 3. 插件  ---  事件总线
// 4. webpack4 - 
// 5. 组件弹框，消息提醒 --- 

// definePlugin： 全局常量
// resolve.alias resolve.extension


// 二分法查找
function binarySearch(arr, target) {
  var max = arr.length - 1;
  var min = 0;
  while(min <= max) {
    var mid = Math.floor((max + min) / 2);
    if(target < arr[mid]) {
      max = mid - 1
    } else if (target > arr[mid]) {
      min = mid + 1
    } else {
      return mid
    }
  }
  return -1;
}