> 这个系列会每天推出一道前端面试题，希望感兴趣的小伙伴能一起留言探讨。

## 问题
 **模拟实现new操作符。**

## 实现目标
```
function Person() {
  this.age = 12;
}
Person.prototype.getAge = function() {
  return 23 + this.age
}
var people = myNew(Person);
console.log(people.age) // 12
console.log(people.getAge()) // 35
```


## 实现思路： 
1. 创建一个新对象
2. 将对象实例的原型指向构造函数的原型，此时对象拥有构造函数原型上的方法
3. 执行构造函数，但是改变调用执行的指向为新的对象，此时新对象的属性为构造函数定义的属性。
4. 将对象返回

### 简易版
```
function myNew(fn) {
   // 创建一个新对象
   var obj = {};
   // 将对象实例的原型指向构造函数的原型
   obj.__proto__ = fn.prototype;
   // 执行构造函数，但是改变调用执行的指向为新的对象
   fn.call(obj)
   // 返回对象
   return obj
 }
```
其中改变构造函数的原型还有其他两种写法：
```
Objext.setPrototypeOf(obj, fn.prototype)
   
obj = Object.create(fn.prototype)
```

### 构造函数参数版
```
function myNew1(fn, ...arg) {
   var obj = {};
   obj.__proto__ = fn.prototype;
   fn.apply(obj, arg)
   return obj
 }
```

### 细节处理版本
new一个构造函数时，如果传递的参数是一个非基础类型的值，且构造函数有返回值，则new的结果为该返回值。例如
```
function Person(name) {
  this.name = name;
  return name
}
var p = new Person(['lili', 'liyang'])
console.log(p) // ['lili', 'liyang']
```
因此稍微改进一下实现
```
function myNew1(fn, ...arg) {
  const obj = {};
  obj.__proto__ = fn.prototype;
  let result = fn.apply(obj, arg)
  return typeof obj === 'object' || typeof obj === 'function' && obj !== null ? result : obj;
}
```




> 下一期： 如何实现JSON.parse()。敬请期待。。。