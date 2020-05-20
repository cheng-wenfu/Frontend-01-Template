## 有限状态机处理字符串

### 有限状态机
> 有限状态机是一种用来进行对象行为建模的工具，其作用主要是描述对象在它的生命周期内所经历的状态序列，以及如何响应来自外界的各种事件。

- 每一个状态都是一个机器，每个机器相互独立，在每个机器里可以做任何运算，如计算、存储、输出等；所有的机器输入的类型都是一致的；机器本身没有状态，可以用纯函数来理解
- 每个机器都知道下一个状态
  - 都有确定的下一个状态（Moore）
  - 每个机器根据输入决定下一个状态（Mealy）



![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589458907136-372db6d9-81ac-4e9d-b557-48a4b7d90e53.png#align=left&display=inline&height=249&margin=%5Bobject%20Object%5D&name=image.png&originHeight=499&originWidth=779&size=228665&status=done&style=none&width=389.5)

### 举例

1. 在一个字符串中，匹配字符"abcedf"
1. 匹配 "abcabx"
1. 作业：匹配"abababx"的处理
1. 可选作业：未知pattern
闭包产生状态
利用数组



![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589460198734-1094b318-2fe5-4275-9032-906f0debd6e6.png#align=left&display=inline&height=133&margin=%5Bobject%20Object%5D&name=image.png&originHeight=265&originWidth=608&size=129771&status=done&style=none&width=304)


## HTML 解析

### 第一步 拆分文件
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589685345991-464b8e59-39e9-4790-914a-b7b2009e9c6f.png#align=left&display=inline&height=77&margin=%5Bobject%20Object%5D&name=image.png&originHeight=154&originWidth=930&size=119043&status=done&style=none&width=465)
### 第二步 创建状态机
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589996342793-40bd6c3f-b858-410b-93ca-b18353d9341d.png#align=left&display=inline&height=96&margin=%5Bobject%20Object%5D&name=image.png&originHeight=191&originWidth=839&size=117398&status=done&style=none&width=419.5)


### 第三步 解析标签
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589986313741-8d6b0bba-dc9a-4ee1-9330-1ce7224a1dc8.png#align=left&display=inline&height=70&margin=%5Bobject%20Object%5D&name=image.png&originHeight=139&originWidth=755&size=71108&status=done&style=none&width=377.5)


### 第四步 创建元素
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589988326324-102c70b9-e9db-4a31-9f7a-6de296923b0b.png#align=left&display=inline&height=66&margin=%5Bobject%20Object%5D&name=image.png&originHeight=132&originWidth=786&size=82985&status=done&style=none&width=393)


### 第五步 处理属性
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589996421317-2aaa48c5-1bda-474a-81d4-defefa1739aa.png#align=left&display=inline&height=111&margin=%5Bobject%20Object%5D&name=image.png&originHeight=221&originWidth=899&size=135403&status=done&style=none&width=449.5)


### 第六步 构建 DOM 树![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589995572936-7d9f0b73-7426-4aee-b675-58ac1366fabb.png#align=left&display=inline&height=154&margin=%5Bobject%20Object%5D&name=image.png&originHeight=377&originWidth=1286&size=391933&status=done&style=none&width=526)



## CSS computing

### 准备
```javascript
npm install css
```


- 内联样式指元素style属性的样式
### 第一步 收集CSS规则
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589628140179-ac380a7c-2c2a-4063-b50d-f4054c7e6e18.png#align=left&display=inline&height=113&margin=%5Bobject%20Object%5D&name=image.png&originHeight=227&originWidth=897&size=156760&status=done&style=none&width=448.5)


### 第二步 添加调用
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589628658213-cb775382-fcb5-4f10-9039-a73504b007e7.png#align=left&display=inline&height=111&margin=%5Bobject%20Object%5D&name=image.png&originHeight=222&originWidth=933&size=177344&status=done&style=none&width=466.5)
重新计算CSS，必然重排，重排必然重绘
CSS 写在body里会发生重绘
CSS选择器是从当前元素从父元素往上找


### 第三步 获取父元素序列
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589629140631-4bf433fc-4ae6-4375-98db-fa9b683f0a2a.png#align=left&display=inline&height=188&margin=%5Bobject%20Object%5D&name=image.png&originHeight=376&originWidth=939&size=278659&status=done&style=none&width=469.5)
### 第四步 拆分选择器
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589630102041-fff2b3f3-c0f6-4f27-bc43-d07608bb3053.png#align=left&display=inline&height=107&margin=%5Bobject%20Object%5D&name=image.png&originHeight=214&originWidth=1024&size=116747&status=done&style=none&width=512)


### 第五步 计算选择器与元素匹配
![image.png](https://cdn.nlark.com/yuque/0/2020/png/412491/1589996092574-47ab2532-8163-4f88-b5fc-aa6384f98447.png#align=left&display=inline&height=98&margin=%5Bobject%20Object%5D&name=image.png&originHeight=195&originWidth=954&size=62854&status=done&style=none&width=477)