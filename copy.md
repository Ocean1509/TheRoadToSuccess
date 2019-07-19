> 这个系列会每天推出一道前端面试题，希望感兴趣的小伙伴能一起留言探讨。

## 问题
 **如何实现浅拷贝和深拷贝**




## 基本实现逻辑

##### 工具类
```
//判断数组
function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

// 判断对象
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}
```
##### 浅拷贝实现
```
// 对象浅拷贝
function shallowCopy(src) {
  for(let i in src) {
    if (src.hasOwnProperty(i)) {
      result[i] = src[i]
    }
  }
  return result
}
```

##### 深拷贝实现
```

// 对象深拷贝
function deepCopy(src) {
  if(!isArray(src) && !isObject(src)) return src
  const result = isArray(src) ? [] : {};
  let copy
  for (let i in src) {
    if (src.hasOwnProperty(i)) {
      copy = src[i];
      if (isObject(copy) || isArray(copy)) {
        result[i] = deepCopy(copy);
      } else {
        isArray(src) ? result.push(copy) : result[i] = copy
      }
    }
  }
  return result
}
```

## 浅拷贝的其他方式

### 对象浅拷贝的其他方式

##### Object.assign
```
Object.assign({}, src)

```

```
const a = {
  b: 1,
  c: {
    d: 12
  }
}
const e = Object.assign({}, a)
a.b = 2
a.c.d = 123
console.log(a)
console.log(e)
```

##### 对象扩展符
```
对象的扩展运算符
{ ...src }
```

```
const a = {
  b: 1,
  c: {
    d: 12
  }
}
const e = { ...a }
a.b = 2
a.c.d = 123
console.log(a)
console.log(e)
```

### 数组浅拷贝的其他方式
##### Array.prototype.slice
```
Array.prototype.slice.call(arr) // 该方法不会影响原数组,splice会影响原来数组
```
```
const arr = [2,4]
const newArr = arr.slice(0)

arr.push(4)
console.log(arr)
console.log(newArr)

```
##### Array.prototype.concat
```
Array.prototype.concat.call(arr) // 该方法不会影响原数组
```
```
const arr = [2,4]
const newArr = arr.concat()

```
### 扩展运算符
```
const arr = [23,45]
const newA = [...arr]

arr.push(4)
console.log(arr)
console.log(newArr)
```

## 深拷贝的其他方式
##### JSON.parse,JSON.stringify
```
JSON.parse(JSON.stringify(obj))
```
缺点： undefined、symbol 和函数会被忽略





  