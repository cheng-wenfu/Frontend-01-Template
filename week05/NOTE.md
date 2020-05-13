# 每周总结可以写在这里
# 周四：结构化程序设计（JavaScript基础）

## JS 执行粒度
- JS Context => Realm 
Context：上下文，对应一个 global object。
Realm：领域，内部为一套完成的 JS 对象。
- 宏任务
- 微任务（Promise）
- 函数调用
- 语句/声明
- 表达式
- 直接量/变量/this ....



### Realm
**作业：将 Realm 可视化**

## 执行上下文栈（Execution Context Stack）
### 函数调用
```javascript
// foo2.js
var y = 2;
function foo2() {
  console.log(y)
}
export foo2

// foo.js
import {foo2} from "foo2.js";
var x = 1;
function foo() {
  console.log(x);
  foo2();
  console.log(x);
}
export foo;

//text.js
import {foo} from "foo.js";
var i = 0;
console.log(i);
foo();
console.log(i);
i++;
```
上述的函数调用过程是一段上下文执行栈的 push 和 pop 的过程。
执行栈的栈元素为 Execution Context 和 栈顶元素 Running Execution Context
#### Execution Context（简称 EC）
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589210323969-6d12eefc-083c-40fb-b9a0-ec97abbc1880.png#align=left&display=inline&height=217&margin=%5Bobject%20Object%5D&name=image.png&originHeight=433&originWidth=832&size=174302&status=done&style=none&width=416)
EC 是执行栈中的除栈顶元素之外的元素。
一个 EC 至少包含以下四个基本结构：

- Code evaluation state
当前执行代码的位置
- Function
如果当前 EC 是一个函数对象执行的代码，那么这个 Function 的值就是那个函数对象；如果执行的是脚本或模块中的代码，则该值为 null
- Realm
当前 EC 中执行所需要的的 JavaScript 中所使用的全局资源等
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589213007338-77f293a6-5835-4155-bb24-1e90ac8a2a45.png#align=left&display=inline&height=232&margin=%5Bobject%20Object%5D&name=image.png&originHeight=463&originWidth=743&size=192776&status=done&style=none&width=371.5)

```javascript
var a = new Array()
var o = new Object() //不需要Realm，直接从 LexicalEnviroment 取
```

- ScriptOrModule
表示当前 EC 执行代码所属的脚本或模块



除此之外还有额外的结构：

- LexcialEnvironment
  - this
  - new.target
  - super
  - 变量
- VariableEnvironment
历史遗留，主要处理 var 声明
- Generator
只为 Generator 对象服务



LexcialEnvironment 和 VariableEnviroment 这两个结构内部是一个链表结构，如下图。
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589212570893-1970d9a0-2c3c-4953-9022-1fb5d8aee7de.png#align=left&display=inline&height=233&margin=%5Bobject%20Object%5D&name=image.png&originHeight=465&originWidth=869&size=206825&status=done&style=none&width=434.5)
d 一般有 with 产生

举例：
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589212754016-2f28011f-17b3-4b03-83f9-04705e000883.png#align=left&display=inline&height=151&margin=%5Bobject%20Object%5D&name=image.png&originHeight=301&originWidth=875&size=95710&status=done&style=none&width=437.5)
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589212811486-1f5edd8e-ec76-46cf-b719-e6f7bf573471.png#align=left&display=inline&height=156&margin=%5Bobject%20Object%5D&name=image.png&originHeight=311&originWidth=967&size=140746&status=done&style=none&width=483.5)
闭包机制
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589212852893-dc83c5e5-9464-4855-b913-12e39a4789be.png#align=left&display=inline&height=142&margin=%5Bobject%20Object%5D&name=image.png&originHeight=284&originWidth=962&size=140631&status=done&style=none&width=481)


#### Runnint Execution Context（简称 REC）
REC 是执行栈中的栈顶元素，表示当前执行的代码。
当栈顶元素执行完成之后，将栈顶元素弹出，栈顶指针指向下一个 EC。


# 浏览器工作原理

## 总论与 HTTP 协议
### 浏览器是如何工作的？
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589270624199-3726a406-2751-450b-99f6-56d7ceb6b129.png#align=left&display=inline&height=86&margin=%5Bobject%20Object%5D&name=image.png&originHeight=172&originWidth=1177&size=108029&status=done&style=none&width=588.5)

1. 通过 URL  进行 HTTP  请求资源，得到 HTML
1. 得到 HTML 后，进行解析
1. 解析 HTML 得到 DOM 树
1. CSS 样式加载，得到 DOM with CSS 
1. 添加布局，完整DOM树生成
1. 渲染，生成界面



### ISO-OSI 七层网络模型
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589271783316-972498aa-2831-464e-aeaa-9869ff22fdad.png#align=left&display=inline&height=261&margin=%5Bobject%20Object%5D&name=image.png&originHeight=522&originWidth=828&size=97481&status=done&style=none&width=414)
### TCP与IP基础知识
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589272075775-ed5fdb51-7c6f-4060-9dcf-5c65d510b241.png#align=left&display=inline&height=106&margin=%5Bobject%20Object%5D&name=image.png&originHeight=211&originWidth=884&size=70184&status=done&style=none&width=442)

- TCP
  - 数据流传输
  - 端口，指向什么应用
  - node.js require('net')
- C++ 语言 IP 数据包
  - libnet/libpcap



### HTTP

- Request
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589383749908-14c51dee-dae1-47f6-8569-2a76b7acaaa9.png#align=left&display=inline&height=125&margin=%5Bobject%20Object%5D&name=image.png&originHeight=249&originWidth=821&size=26173&status=done&style=none&width=410.5)
- Response
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589383764988-cae8907e-3e9a-4b5f-ba6c-19b2aa7faebb.png#align=left&display=inline&height=207&margin=%5Bobject%20Object%5D&name=image.png&originHeight=414&originWidth=711&size=42528&status=done&style=none&width=355.5)
