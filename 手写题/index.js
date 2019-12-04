// new 
function Mynew(fn, ...args) {
  let obj = Object.create(null)
  Object.setPrototypeOf(obj, fn.prototype);
  let result = fn.apply(obj, args)
  return (typeof result === 'Object' || result === 'Function') && result !== null ? result : obj
}

// 浅拷贝，深拷贝
// 数组浅拷贝： Arrary.prototype.slice(), concat, [...arr]
// 对象浅拷贝： Object.assign(),    { ...obj }
function isArray(src) {
  return Object.prototype.toString.call(src) === '[object Array]'
}

function isObj(src) {
  return Object.prototype.toString.call(src) === '[object Object]'
}

function deepCopy(src) {
  if (!isArray(src) && !isObj(src)) return src
  let result = isArray(src) ? [] : {};
  for (let i in src) {
    if (src.hasOwnProperty(i)) {
      if (isObj(src[i]) || isArray(src[i])) {
        result[i] = deepCopy(src[i])
      } else {
        result[i] = src[i]
      }
    }
  }
  return result
}



// 实现call，apply,bind
Function.prototype.myCall = function (fn, ...args) {
  let context = fn ? fn : window;
  let fun = Symbol()
  context[fun] = this;
  let result = context[fun](...args);
  delete context[fun];
  return result
}

Function.prototype.myApply = function (fn, args) {
  let context = fn ? fn : window;
  let fun = Symbol()
  context[fun] = this;
  let result = context[fun](...args);
  delete context[fun];
  return result
}

Function.prototype.myBind = function (context, ...args) {
  let that = this
  return function (...arguments) {
    return that.apply(((this instanceof that) ? this : context), [...args, ...arguments])
  }
}


// 偏函数的实现 -  类似bind
// 函数柯里化的实现
function curry(fn) {
  if (fn.length < 2) return fn; // 当fn的参数只有一个或者更少时， 直接返回该函数并不需要柯里化。
  const generate = function (args, length) {
    return !length ? fn.apply(this, args) : function (arg) {
      return generate(args.concat(arg), length - 1) // 循环递归调用，直到接收完所有参数(与函数参数个数一致), 将所有参数传递给fn进行调用。
    }
  }
  return generate([], fn.length)
}



function add(a, b, c) {
  return a + b + c
}
var curryAdd = curry(add);
// console.log(curryAdd(1)(2)(3))


// 让(a == 1 && a == 2 && a == 3)成立
// 第一种方式
var a = {
  [Symbol.toPrimitive]: (function() {
    let i = 1
    return function() {
      return i++
    }
  }())
}

 if(a == 1 && a == 2 && a == 3){
   console.log(true)
 }
// 第二种方式 proxy

// 动态创建脚本

function createScript(src) {
  let script = document.createElement('script');
  script.src = src;
  document.body.append(script)
}

// XHR
let xhr = new XMLHttpRequest();
xhr.open('www.ssss');
xhr.send()
xhr.onreadystatechange = function() {
  if(xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText)
  }
}

// es5的继承方式


// 手写eventEmitter

class EventEmitter {
  constructor() {
    this.map = {}
  }
  on(event, cb) {
    if(this.map[event]) this.map[event].push(cb)
    else this.map[event] = [].push(cb)
  }
  emit(event, params) {
    if(this.map[event]) {
      this.map[event].forEach((value) => {
        value.call(this, params)
      })
    }
  }
  off(event) {
    if(this.map[event]) delete this.map[event]
  }
  once(event, cb) {
    let flag = false
    function handle() {
      this.off(event)
      if (!flag) {
        flag = true;
        cb.apply(this, arguments);
      }
    }
    this.on(event, handle)
  }
}


var eventEmit = new EventEmitter()

eventEmit.on('listen', (params) => {
  console.log(params)
})

eventEmit.emit('listen', 12)


// 实现一个周岁函数，实现fn('2018-08-08')

function fullYear(str) {
  const timeArray = str.split('-');
  const year = Number(timeArray[0])
  const month = Number(timeArray[1])
  const date = Number(timeArray[2])
  const currentY = new Date().getFullYear();
  const currentM = new Date().getMonth() + 1;
  const currentD = new Date().getDate();
  let remian = 0
  if (currentY <= year) return remian;
  remain = currentY - year;
  if(currentM < month || (currentM === month) && currentD < date) remain--
  return remain
}


// 2018-11-20 2019-11-25

// 求两个数组的交集


var arr1 = [2, 5, 1, 51, 32, 45, 23, 12, 43, 51, 23, 5, 15, 4]
var arr2 = [2, 5, 23, 4, 6, 23, 1, 3, 4, 621, 3, 1, 34, 342, 6, 13, 4, 3]

// 方法1
function intersect(arr1, arr2) {
  if (arr1.length > arr2.length) {
    let temp = arr1;
    arr1 = arr2;
    arr2 = temp
  }
  var arr = []
  for (let i of arr2) {
    let idx = arr1.indexOf(i);
    if (idx !== -1) {
      arr.push(i);
      arr1.splice(idx, 1)
    }
  }
  return arr
}


// 数组合集
function intersection() {
  return arr2.filter(v => arr1.includes(v))
}

// 数组差集
function difference(arr1, arr2) {
  return arr1.concat(arr2).filter(v => !arr1.includes(v) || !arr2.includes(v))
}

console.log(getArr(arr1, arr2))




// 模拟跨站请求伪造，post请求



// 轮播插件

// 严格模式： 变量需要定义才能使用，不能使用eval， 八进制无效，没有绑定对象调用时，this为undefined而不是window

// docType规定了浏览器用什么形式去渲染，如果没有定义，则为怪异模式，此时浏览器会按照自身浏览器的特性去渲染，有定义则按w3c标准的形式去渲染

// content-type accept-language

// node 通信机制，内存优化 v8垃圾回收（新，old的实现原理）

// webpack 的原理是什么

// vue-router 前端鉴权


// 设计一个响应式系统
// 依赖收集器
class Dep {
  constructor() {
    this.dep = []
  }
  depend() {
    if(Dep.target) {
      this.dep.push(Dep.target)
    }
  }
  notify() {
    for(let i in this.dep) {

    }
  }
}
Dep.target = null;
// 依赖
class Watcher {
  constructor(handler) {
    this.get(handler)
  }
  get(handler) {
    Dep.target = this;
    handler()
  }
}
// 响应式对象
class Observer {
  constructor(data) {
    this.walk(data)
  }
  walk(data) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        new Dep()
        Object.defineProperty(data, key, {
          configurable: true,
          enumerable: true,
          get() {

          },
          set() {

          }
        })
        
      }
    }
  }
}

class MyVue {
  constructor(options) {
    this.initData(options.data)
    const updateView = function() {}
    new Watcher(updateView)
  }
  initData(data) {
    new Observer(data)
  }
}


// compositionStart
// compositionEnd
// e.target.composition

// 组件v-model
// <child v-model="change"></child>
// <div @input="dd" :value="value"></div>