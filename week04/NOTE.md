 周四：结构化程序设计

## 运行时概念
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1588776762995-71c26cdd-3e9a-429b-81ce-a853c32c8e4a.png#align=left&display=inline&height=315&margin=%5Bobject%20Object%5D&name=image.png&originHeight=291&originWidth=319&size=11866&status=done&style=none&width=343)
### 栈
在 JS 中，函数调用运行时是通过栈来实现的，引入栈帧概念。
> 栈帧是指为一个函数调用单独分配的那部分栈空间

```javascript
function foo1(x) {
  let y = 10;
  ruturn x + y;
}
function foo2(x) {
  let y = 9;
  return foo1(x + y);
}

console.log(foo2(8)) // 27
console.trace //查看调用栈
```
当函数被调用时，就会被加入到调用栈顶部，执行结束之后，就会从调用栈顶部移除该函数。
调用 foo2 函数时，会在栈里分配一个栈空间给 foo2 函数，也就是栈帧，栈帧内部包含 foo2 函数的参数和局部变量；当 foo2 内部调用 foo1 函数时，给 foo1 创建一个新的栈帧并压入栈顶，当 foo1 执行完毕并返回时，foo1 栈帧从栈顶弹出（剩下 foo2 栈帧，在栈顶位置）。当 foo2 执行完毕比返回后， foo2 栈帧弹出，栈被清空。

### 堆
运行时，JS 对象被分配在堆中存储


### 队列
> 一个 JavaScript 运行时包含了一个待处理消息的消息队列。每一个消息都关联着一个用以处理这个消息的回调函数。



## 宏任务和微任务
参考链接：[https://juejin.im/post/5b73d7a6518825610072b42b](https://juejin.im/post/5b73d7a6518825610072b42b)
JS 是一个单线程的脚本语言，但依然有同步操作和异步操作；
宏任务在 JS 中一般指 setTimeout, setInterval, setImmediate, I/O；
微任务一般指 process.nextTice, MutationObserver, Promise.then catch finally；
看这个代码：
```javascript
setTimeout(_ => console.log(0), 2000)

console.log(1)

new Promise(resolve =>{
  resolve()
  console.log(2)
}).then(_ => {
	console.log(3)
})

console.log(4)
```
上述代码中，setTimeout 是**宏任务1**，其他代码都是微任务可以看做是一个**宏任务2**。上述代码先执行宏任务2，当执行到 new Promise.then() 时，将内部的回调函数放到任务对列中，然后执行第十二行代码，然后在执行任务对列中的回调函数。当宏任务2执行完之后，才会执行 setTimeout，但是执行 setTimeout 时，内部的回调函数依然会先放进去任务队列中等待然后再执行。


任务队列里有很多宏任务，但是只有当前宏任务的微任务里执行完，才会执行下一个宏任务。

## 事件循环
可视化：[https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif](https://dev.to/lydiahallie/javascript-visualized-event-loop-3dif)
