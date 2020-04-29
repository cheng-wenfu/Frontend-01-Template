## 上周补充知识点
#### 判断正负0
```javascript
function check(zero) {
  if(1/zero === Infinity){}
  if(1/zero === -Infinity){}
}
  
```
#### 精度流失[链接]()
```javascript
(1.3 + 1.1 - 2.4) < Number.EPSILON //false
```
三次二进制转换，精度丢失；二次运算，精度丢失；总共五次精度丢失


## Atom
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
[https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators)
#### Grammar

- Grammar Tree vs Priority
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587642850322-c520a3fe-14b4-487d-afd4-b1f7b98f0837.png#align=left&display=inline&height=164&margin=%5Bobject%20Object%5D&name=image.png&originHeight=158&originWidth=487&size=9727&status=done&style=none&width=506)
- Left hand side & Right hand side
#### Runtime

- Type Convertion
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587643475037-6ae11ae1-8d84-48c9-a91b-bea0ae90d0fc.png#align=left&display=inline&height=215&margin=%5Bobject%20Object%5D&name=image.png&originHeight=430&originWidth=1008&size=111606&status=done&style=none&width=504)



## Expression

1. Member 属性访问
  - a.b
  - a[b]
  - foo`string`

```javascript
var name = "cheng"
function foo() {
  console.log(arguments)
}
foo`Hello ${name}`;
```

  - super.b
调用父类的属性或方法

  - super['b']
  - new.target 
只能在函数里面用，判断是否为new调用，判断哪个New调用

```javascript
function foo() {
  console.log(new.target);
}
new foo()
```

  - new Foo()
2. new
new Foo

```javascript
function cls1(s) { console.log(s)}
function cls2(s) {
  console.log("2", s);
  return cls1;
}
new new cls2("good")
new (new cls2("good"))

```


3. Reference
  - 属性
    - Object
    - key
  - 运算符
    - delete
    - asign
4. call
  - foo()
  - super()
  - foo()['b']
  - foo().b
  - foo()`abc`
```javascript
class foo {
    constructor() {
        this.b = 1
    }
}
new foo()["b"]
```

5. Left Handside & Right Handside

```javascript
a.b = c
a + b = c
```

6. Update

```javascript
//a 和 ++ -- 之间不可以有回车等
a ++ 
a --
//++ -- 和 a 之间可以有回车
-- a 
++ a
```

7. Unary 单目运算符
  - delete a.b
  - void foo() 生成 undefined
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587648426459-2ac5de5e-e14b-460a-8d30-d8cd47c4456f.png#align=left&display=inline&height=91&margin=%5Bobject%20Object%5D&name=image.png&originHeight=111&originWidth=295&size=30154&status=done&style=none&width=241)
  - typeof a

```javascript
typeof null //"Object"
typeof function(){} //"function"
```

  - + a
  - - a
  - ~ a
  - ! a

```javascript
!!1 //true
```

  - await a
8. Exponental
  - ** 右结合

```javascript
2**2**3 
2**(2**3)
```

9. Multiplicative
  - * / %
10. Additive
  - +-
11. Shift
11. Relationshop
11. Equality
  - ==
  - !=
  - ===
  - !==
14. Bitwise
  - & ^ |
15. Logical
  - ||
  - &&
```javascript
function foo1() {
  console.log(1)
  return false
}
function foo2() {
  console.log(2)
}
foo1() && foo2() //foo2() 不执行
foo1() || foo2()

```

16. Conditional
  - ? :



#### 装箱转换
```javascript
//对象
new String("1")
new Number(1)
new Boolean(true) 
Object("1")

Object(Symbol("1"))
(function(){return this}).apply(Symbol("a"))

//类型
String("1") //"1"
Number(1)
Boolean(true)
```


#### 拆箱转换
```javascript
1 + {}
1 + {valueOf() {return 2}}//3
1 + {toString() {return 2}} //3
1 + {valueOf() {return 1}, toString() {return 2}//2
1 + {[Symbol.toPrimitive](){return 6}, valueOf(){return 2}, toString(){return 3}} //7
1 + {valueOf(){return {}}, toString() {return 3}} //4

```




## Statement 语句
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587812879717-9252ffa3-6500-4c2a-a82e-708b6d8e97ba.png#align=left&display=inline&height=140&margin=%5Bobject%20Object%5D&name=image.png&originHeight=279&originWidth=845&size=53313&status=done&style=none&width=423)


![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587813045878-dad1fd03-d34e-4195-9b14-3d324bc2ba7d.png#align=left&display=inline&height=233&margin=%5Bobject%20Object%5D&name=image.png&originHeight=466&originWidth=486&size=73673&status=done&style=none&width=243)

- 表达式语句
a = 1 + 2
- 空语句
 ;
- Debugger 语句 调试用途
debugger
- throw
throw a;
- continue
continue labelName;
labelName 合法标识符
- break
break labelName;
- return 1 + 2





#### block
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587813303556-7a77d03e-f407-40a9-8bc5-38fe6a3968cd.png#align=left&display=inline&height=249&margin=%5Bobject%20Object%5D&name=image.png&originHeight=498&originWidth=721&size=59784&status=done&style=none&width=361)


```javascript
{
  const a = 1;
  throw 1; // 非normal语句，运行中断
  let b = 2;
  b = () => {}
}
```
#### 
#### Iteration
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587813813153-43c8b6c7-240e-4d76-a349-07187c59b03e.png#align=left&display=inline&height=238&margin=%5Bobject%20Object%5D&name=image.png&originHeight=475&originWidth=779&size=118983&status=done&style=none&width=390)
```javascript
var i = 0;
for(; i<10; i++) {
  let i = 0;
  console.log(i)
}
console.log(i) //10

let ob = {
	a:1,
	b:2,
	c:3
}
for(let p in ob) {
	console.log(p)
}
for (let ar in [1, 2, 3]) {
	console.log(ar)
}
```


![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587815844348-1f5d4751-8e15-4c4a-af03-9b0dcdfd7839.png#align=left&display=inline&height=204&margin=%5Bobject%20Object%5D&name=image.png&originHeight=407&originWidth=853&size=102630&status=done&style=none&width=426.5)


#### try
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587816102648-e7cb2c23-85e9-4864-bd73-6f9fe6b17ef5.png#align=left&display=inline&height=232&margin=%5Bobject%20Object%5D&name=image.png&originHeight=464&originWidth=785&size=86951&status=done&style=none&width=392.5)
```javascript
try {
  var a = 1
  throw 3
} catch(e) {
  a ++
} finally {
}
  
```




### 声明
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587818365624-69ca6b22-287e-4d49-972e-16b5e185f50a.png#align=left&display=inline&height=251&margin=%5Bobject%20Object%5D&name=image.png&originHeight=502&originWidth=480&size=82717&status=done&style=none&width=240)
#### 函数声明
```javascript
//函数声明
function Foo() {}

// 函数表达式
const foo = function() {}
```


```javascript
var x = 0;
    function foo() {
        var o = {x:1};
        x = 2;
        with(o) {
            x = 3
        }
        console.log(x)
    }
    foo() // 2
    console.log(x) // 2
```


变量提升，函数提升
```javascript
foo()
console.log(x)
var x = 0;
function foo() {
	var o = {x:1};
	x = 2;
	with(o) {
		x = 3
	}
	console.log(x)
}

```


ClassDeclartion
类声明只能声明一次，必须先声明后使用，let 和 const 一样，不能做提升，


## Object
中文意义：**对象**，英文意指**世间万物**
**对象三要素：唯一性，状态、行为**


#### 归类思想
多继承


#### 分类思想
单继承结构，会有一个基类


![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587821248591-75b07f7f-46b8-44cc-89ad-5d10ade233f6.png#align=left&display=inline&height=219&margin=%5Bobject%20Object%5D&name=image.png&originHeight=437&originWidth=753&size=114025&status=done&style=none&width=376.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1587822023028-32a421cf-3ce1-4b46-8f07-57811d583d39.png#align=left&display=inline&height=211&margin=%5Bobject%20Object%5D&name=image.png&originHeight=422&originWidth=724&size=149188&status=done&style=none&width=362)




